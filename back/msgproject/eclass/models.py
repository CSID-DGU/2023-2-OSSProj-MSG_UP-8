from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# class Student(models.Model):
#     id = models.IntegerField(primary_key=True)
#     pw = models.CharField(max_length=50)
#     name = models.CharField(max_length=50)
#     class_list = models.CharField(max_length=200, blank=True, null=True)
#     todo_list = models.CharField(max_length=255, blank=True, null=True)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    student_id = models.CharField(max_length=10)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name if self.user else "No User"


class classlist(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    professor = models.CharField(max_length=20, blank=False, null=False)
    day1 = models.CharField(max_length=2, blank=True, null=True)
    day2 = models.CharField(max_length=2, blank=True, null=True)
    starttime1 = models.CharField(max_length=20, blank=True, null=True)
    endtime1 = models.CharField(max_length=20, blank=True, null=True)
    starttime2 = models.CharField(max_length=20, blank=True, null=True)
    endtime2 = models.CharField(max_length=20, blank=True, null=True)
    place = models.CharField(max_length=100)
    major = models.CharField(max_length=50, blank=False, null=False)


class CSVFile(models.Model):
    file = models.FileField(upload_to='csv_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
