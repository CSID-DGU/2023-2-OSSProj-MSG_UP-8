from rest_framework import serializers
from .models import UserTimetable

class UserTimetableSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTimetable
        fields = ['userprofile', 'userclasses']