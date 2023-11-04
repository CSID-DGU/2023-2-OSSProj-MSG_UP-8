from django.db import models
from eclass.models import UserProfile

class TodoItem(models.Model):
    owner = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    todo_title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    due_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.todo_title