from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserTimetable
from eclass.models import UserProfile, UserClasslist, Classlist
from .serializers import UserTimetableSerializer, UserTimetableGETSerializer


class UserTimetableViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserTimetable.objects.all()
    serializer_class = UserTimetableSerializer

    def retrieve(self, request, *args, **kwargs):
        # 요청한 사용자의 UserProfile 인스턴스를 가져옵니다.
        user_profile = UserProfile.objects.get(user=request.user)

        # 해당 UserProfile과 연결된 UserTimetable 인스턴스를 조회합니다.
        try:
            user_timetable = UserTimetable.objects.get(userprofile=user_profile)
        except UserTimetable.DoesNotExist:
            return Response({'error': '시간표가 존재하지 않습니다.'}, status=status.HTTP_404_NOT_FOUND)

        # UserTimetable 인스턴스에 대한 시간표를 구성합니다.
        complete_timetable = self.create_timetable(user_timetable)

        # UserTimetable 인스턴스를 시리얼라이즈합니다.
        serializer = UserTimetableGETSerializer(user_timetable)

        # 시간표 데이터와 함께 응답을 반환합니다.
        return Response({'timetable': complete_timetable, **serializer.data})


    def add_class_to_timetable(self, user_timetable, userclass_id):
        try:
            new_class = Classlist.objects.get(id=userclass_id)
        except Classlist.DoesNotExist:
            return False  # no class exists in given class_id

        # UserClasslist 객체를 조회합니다. 이 객체는 new_class와 연결되어야 합니다.
        try:
            user_classlist = UserClasslist.objects.filter(userclass=new_class).first()
            if not user_classlist:
                return False  # 연결된 UserClasslist 객체가 없습니다.
        except UserClasslist.DoesNotExist:
            return False  # 연결된 UserClasslist 객체가 없습니다.

        # 시간표 충돌 검사
        if self.check_class_conflicts(user_timetable, new_class):
            return False

        user_timetable.userclasses.add(user_classlist)
        user_timetable.save()
        return True

    def check_class_conflicts(self, user_timetable, new_class):
        for classlist in user_timetable.userclasses.all():
            for existing_class in classlist.userclass.all():
                # 충돌 검사 로직 구현 (시간과 요일을 비교)
                # new_class_instance와 existing_class_instance는 Classlist 인스턴스
                
                # new_class와 existing_class의 모든 유효한 요일 조합을 확인
                new_class_days = set(filter(None, [new_class.day1, new_class.day2]))
                existing_class_days = set(filter(None, [existing_class.day1, existing_class.day2]))

                # 겹치는 유효한 요일이 있는지 확인
                common_days = new_class_days.intersection(existing_class_days)
                if common_days:
                    # 겹치는 요일이 있을 경우에만 시간 충돌 검사를 수행
                    if self.check_time_conflict(new_class, existing_class):
                        return True
                    break
                break
        return False

    def check_time_conflict(self, class1, class2):
        # 각 클래스의 시작 및 종료 시간을 datetime 객체로 변환
        format_str = "%H:%M"
        class1_starttime1 = datetime.strptime(class1.starttime1, format_str)
        class1_endtime1 = datetime.strptime(class1.endtime1, format_str)
        class2_starttime1 = datetime.strptime(class2.starttime1, format_str)
        class2_endtime1 = datetime.strptime(class2.endtime1, format_str)

        # 시간이 겹치는지 확인
        if class1_starttime1 < class2_endtime1 and class1_endtime1 > class2_starttime1:
            return True

        # 각 클래스의 두 번째 시간 (있을 경우)에 대한 충돌 검사
        if class1.starttime2 and class2.starttime2:
            class1_starttime2 = datetime.strptime(
                class1.starttime2, format_str)
            class1_endtime2 = datetime.strptime(class1.endtime2, format_str)
            class2_starttime2 = datetime.strptime(
                class2.starttime2, format_str)
            class2_endtime2 = datetime.strptime(class2.endtime2, format_str)

            if class1_starttime2 < class2_endtime2 and class1_endtime2 > class2_starttime2:
                return True

        return False
    
    def parse_classtimes(self, classtime_str):
            # classtime_str 예: "101,203,305"
            classtime_list = [int(ct.strip()) for ct in classtime_str.split(',')]
            return classtime_list



    def create_timetable(self, user_timetable):
        # 기존 시간표 구조를 초기화합니다.
        timetable_structure = self.initialize_timetable()

        # 사용자가 선택한 강의에 대해 시간표를 구성합니다.
        for user_class in user_timetable.userclasses.all():
            for instance in user_class.userclass.all():
                # 강의의 classtime 식별자를 파싱하여 정수 배열로 변환합니다.
                classtimes = self.parse_classtimes(instance.classtime)
                # 각 식별자에 대해 시간표에 강의를 배치합니다.
                for classtime in classtimes:
                    day_index = classtime // 100  # 예: 102 -> 1 (화요일)
                    time_index = classtime % 100  # 예: 102 -> 2 (09:30)
                    # 실제 시간표 배열의 인덱스에 맞게 조정합니다.
                    day_index = day_index - 1  # 배열 인덱스는 0부터 시작하므로 1을 빼줍니다.
                    # time_index = time_index  # 배열 인덱스는 이미 0부터 시작하므로 변환 필요 없음
                    # 시간표 배열에 강의명을 할당합니다.
                    timetable_structure[time_index][day_index] = instance.name

                # 강의의 classtime 식별자를 사용하여 시간표에 강의를 배치합니다.
                # day_index = user_class.classtime // 100  # 예: 102 -> 1 (화요일)
                # time_index = user_class.classtime % 100  # 예: 102 -> 2 (09:30)
                
                # 시간표 배열에 강의명을 할당합니다.
                # timetable_structure[time_index][day_index] = user_class.name

        return timetable_structure

    def initialize_timetable(self):
        # 사진에서 제시된 식별자에 따라 시간표 배열을 초기화합니다.
        times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
                "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
                "17:00", "17:30", "18:00"]
        days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
        timetable_structure = [["" for _ in days] for _ in times]
        return timetable_structure


    @transaction.atomic
    def create(self, request, *args, **kwargs):

        try:
            user_profile = UserProfile.objects.get(user=request.user)
        except ObjectDoesNotExist:
            return Response({'error': 'UserProfile 인스턴스가 없습니다.'}, status=status.HTTP_404_NOT_FOUND)

        # if UserTimetable.objects.filter(userprofile=user_profile).exists():
        #     return Response({'error': '사용자는 이미 시간표를 가지고 있습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        selected_classes = UserClasslist.objects.filter(user=user_profile)
        if not selected_classes.exists():
            return Response({'error': '선택된 클래스가 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        # 각 UserClasslist 인스턴스에 연결된 Classlist 인스턴스들의 ID를 로깅
        for c in selected_classes:
            for instance in c.userclass.all():
                print(f"Selected class ID: {instance.id}")

        user_timetable = UserTimetable.objects.create(userprofile=user_profile)

        # 선택된 각 Classlist 객체에 대해 시간표 충돌 검사 및 추가
        for class_instance in selected_classes:
            for instance in class_instance.userclass.all():
                if not self.add_class_to_timetable(user_timetable, instance.id):
                    # 충돌이 발생한 경우, 시간표를 삭제하고 에러 응답
                    user_timetable.delete()
                    return Response({'error': '시간표 충돌이 발생했습니다.'}, status=status.HTTP_400_BAD_REQUEST)
            
        # 시간표를 구성합니다.
        complete_timetable = self.create_timetable(user_timetable)
        # 시간표를 포함하여 시리얼라이저 인스턴스를 생성합니다.
        serializer = self.get_serializer(instance=user_timetable)

        return Response({'timetable': complete_timetable, **serializer.data}, status=status.HTTP_201_CREATED)

            # 시리얼라이저 인스턴스 생성
        # serializer = self.get_serializer(instance=user_timetable)
        # return Response(serializer.data, status=status.HTTP_201_CREATED)
