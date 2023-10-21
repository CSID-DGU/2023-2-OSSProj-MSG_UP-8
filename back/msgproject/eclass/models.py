from django.db import models

# Create your models here.

class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    pw = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    class_list = models.CharField(max_length=200, blank=True, null=True)
    todo_list = models.CharField(max_length=255, blank=True, null=True)