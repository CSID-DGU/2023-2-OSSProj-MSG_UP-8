from django.db import models
from eclass.models import UserProfile

class Event(models.Model):
    owner = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    in_title = models.CharField(max_length=100)
    in_startdate = models.DateField()
    in_enddate = models.DateField()
    color = models.CharField(max_length=7, null=True) 

    def __str__(self):
        return self.in_title