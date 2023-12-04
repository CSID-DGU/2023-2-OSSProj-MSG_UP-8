from django.db import models
from eclass.models import UserProfile, UserClasslist


class UserTimetable(models.Model):
    userprofile = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    userclasses = models.ManyToManyField(UserClasslist)

    # 실제 timetable 구조를 저장하는 방법을 고려해야 합니다.
    # 예: JSONField를 사용하거나 강의와 시간을 연결하는 별도의 모델 생성
