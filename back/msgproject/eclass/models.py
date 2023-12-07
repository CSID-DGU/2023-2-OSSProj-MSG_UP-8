from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    student_id = models.CharField(max_length=10)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name if self.user else "No User"


class Classlist(models.Model):
    name = models.CharField(max_length=50)
    professor = models.CharField(max_length=20, blank=False, null=False)
    day1 = models.CharField(max_length=2, blank=True, null=True)
    day2 = models.CharField(max_length=2, blank=True, null=True)
    starttime1 = models.CharField(max_length=20, blank=True, null=True)
    endtime1 = models.CharField(max_length=20, blank=True, null=True)
    starttime2 = models.CharField(max_length=20, blank=True, null=True)
    endtime2 = models.CharField(max_length=20, blank=True, null=True)
    place = models.CharField(max_length=100, blank=True, null=True)
    classtime = models.CharField(max_length=50, blank=True, null=True)


class UserClasslist(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    userclass = models.ManyToManyField(Classlist)