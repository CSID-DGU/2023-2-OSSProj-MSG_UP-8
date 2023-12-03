from django.db import models
from eclass.models import UserClasslist, UserProfile

class ClassPage(models.Model):
    
    ClassPage = models.ForeignKey(UserClasslist, on_delete=models.CASCADE)
    ClassUser = models.ForeignKey(UserProfile, on_delete=models.CASCADE)