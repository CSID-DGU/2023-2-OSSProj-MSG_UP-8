from rest_framework import serializers
from .models import UserTimetable

class UserTimetableSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTimetable
        fields = ['userprofile', 'userclasses']


class UserTimetableGETSerializer(serializers.ModelSerializer):
    timetable = serializers.SerializerMethodField()

    class Meta:
        model = UserTimetable
        fields = ['userprofile', 'userclasses', 'timetable']

    def get_timetable(self, obj):
        # 시간표 데이터를 생성하는 로직
        # 예시: obj.userclasses를 사용하여 시간표 생성
        timetable_data = self.create_timetable(obj)
        return {'timetable': timetable_data}

    
    def create_timetable(self, user_timetable):
        # 시간표 배열 초기화
        times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
                 "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
                 "17:00", "17:30", "18:00"]
        days = ["월", "화", "수", "목", "금"]
        timetable_structure = [["" for _ in days] for _ in times]

        # 각 UserClasslist 인스턴스에 대해 순회
        for user_classlist in user_timetable.userclasses.all():
            for class_instance in user_classlist.userclass.all():
                # 각 Classlist 인스턴스의 시간 정보를 추출하여 시간표에 할당
                # for day, day_num in zip(days, range(5)):
                #     if class_instance.day1 == day or class_instance.day2 == day:
                #         start_time, end_time = class_instance.starttime1, class_instance.endtime1
                #         start_index = times.index(start_time)
                #         end_index = times.index(end_time)
                #         for i in range(start_index, end_index):
                #             timetable_structure[i][day_num] = class_instance.name
                for day in days:
                    if day == class_instance.day1 or day == class_instance.day2:
                        start_time = class_instance.starttime1
                        end_time = class_instance.endtime1
                        start_index = times.index(start_time)
                        end_index = times.index(end_time)
                        day_index = days.index(day)
                        for i in range(start_index, end_index):
                            timetable_structure[i][day_index] = class_instance.name

        return timetable_structure