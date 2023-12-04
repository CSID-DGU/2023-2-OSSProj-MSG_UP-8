from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserTimetable
from eclass.models import Classlist, UserProfile, UserClasslist
from .serializers import UserTimetableSerializer

class UserTimetableViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserTimetable.objects.all()
    serializer_class = UserTimetableSerializer

    def add_class_to_timetable(self, user_timetable, class_id):
        try:
            new_class = UserClasslist.objects.get(id=class_id)
        except UserClasslist.DoesNotExist:
            return False #no class exists in given class_id

        # 시간표 충돌 검사
        if self.check_class_conflicts(user_timetable, new_class):
            return False

        
        user_timetable.userclasses.add(new_class)
        user_timetable.save()
        return True

    def check_class_conflicts(self, user_timetable, new_class):
        for existing_class in user_timetable.userclasses.all():
            # 충돌 검사 로직 구현 (시간과 요일을 비교)
            
            # new_class와 existing_class의 모든 요일 조합을 확인
            new_class_days = [new_class.day1, new_class.day2]
            existing_class_days = [existing_class.day1, existing_class.day2]

            # 겹치는 요일이 있는지 확인
            for new_day in new_class_days:
                if new_day and new_day in existing_class_days:
                    # 시간 충돌 검사
                    if self.check_time_conflict(new_class, existing_class):
                        return True
            
            
            # # 요일 충돌 검사
            # if new_class.day1 in [existing_class.day1, existing_class.day2] or \
            #    new_class.day2 in [existing_class.day1, existing_class.day2]:
            #     # 시간 충돌 검사
            #     if self.check_time_conflict(new_class, existing_class):
            #         return True
            

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
            class1_starttime2 = datetime.strptime(class1.starttime2, format_str)
            class1_endtime2 = datetime.strptime(class1.endtime2, format_str)
            class2_starttime2 = datetime.strptime(class2.starttime2, format_str)
            class2_endtime2 = datetime.strptime(class2.endtime2, format_str)

            if class1_starttime2 < class2_endtime2 and class1_endtime2 > class2_starttime2:
                return True
            
        return False

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        # user_profile = UserProfile.objects.get(user=request.user)

        try:
            user_profile = UserProfile.objects.get(user=request.user)
        except ObjectDoesNotExist:
            return Response({'error': 'UserProfile 인스턴스가 없습니다.'}, status=status.HTTP_404_NOT_FOUND)

        # if UserTimetable.objects.filter(userprofile=user_profile).exists():
        #     return Response({'error': '사용자는 이미 시간표를 가지고 있습니다.'}, status=status.HTTP_400_BAD_REQUEST)
    
        # selected_classes = UserClasslist.objects.filter(user=user_profile).first().userclass.all()
        selected_classes = UserClasslist.objects.filter(user=user_profile)
        if not selected_classes:
            return Response({'error': '선택된 클래스가 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        # 선택된 강의들의 ID를 로깅
        for c in selected_classes:
            print(f"Selected class ID: {c.id}")


        user_timetable = UserTimetable.objects.create(userprofile=user_profile)
        
        # 선택된 각 Classlist 객체에 대해 시간표 충돌 검사 및 추가
        for class_instance in selected_classes:
            if not self.add_class_to_timetable(user_timetable, class_instance.id):
                # 충돌이 발생한 경우, 시간표를 삭제하고 에러 응답
                user_timetable.delete()
                return Response({'error': '시간표 충돌이 발생했습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        

            # 시리얼라이저 인스턴스 생성
        serializer = self.get_serializer(instance=user_timetable)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        # # 유효성 검사
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # else:
        #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # 
        # 
        #     # class_ids = request.data.get('userclasses', [])
        # for class_id in class_ids:
        #     if not self.add_class_to_timetable(user_timetable, class_id):
        #         return Response({'error': '시간표 충돌이 발생했습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # ---------------------------------------------------------------

        
        # serializer.is_valid(raise_exception=True)
        # serializer_class = UserTimetableSerializer
        # user_timetable = serializer_class.save()

        # class_ids = request.data.get('class_ids', [])
        # for class_id in class_ids:
        #     if not self.add_class_to_timetable(user_timetable, class_id):
        #         return Response({'error': '시간표 충돌이 발생했습니다.'}, status=status.HTTP_400_BAD_REQUEST)
