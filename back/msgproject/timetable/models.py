from django.db import models
from eclass.models import UserProfile, UserClasslist


class UserTimetable(models.Model):
    userprofile = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    userclasses = models.ManyToManyField(UserClasslist)
