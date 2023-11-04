from django.db import models

class Schedule(models.Model):
    out_title = models.CharField(max_length=100)
    out_startdate = models.DateField()
    out_enddate = models.DateField()