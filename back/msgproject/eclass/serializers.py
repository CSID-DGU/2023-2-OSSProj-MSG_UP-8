from rest_framework import serializers
from .models import UserProfile

from .models import Classlist, UserClasslist

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['student_id', 'name']


class Classserializer(serializers.ModelSerializer):
    class Meta:
        model = Classlist
        fields = ['id', 'name', 'professor', 'day1', 'day2', 'starttime1',
                  'endtime1', 'starttime2', 'endtime2', 'place', 'major']


class UserClasslistSerializer(serializers.ModelSerializer):
    userclass = serializers.PrimaryKeyRelatedField(many=True, queryset=Classlist.objects.all())

    
    class Meta:
        model = UserClasslist
        fields = ['user', 'userclass']