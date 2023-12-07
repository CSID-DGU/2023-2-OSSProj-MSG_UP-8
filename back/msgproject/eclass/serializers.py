from rest_framework import serializers
from .models import UserProfile

from .models import Classlist, UserClasslist


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'student_id', 'name']


class Classserializer(serializers.ModelSerializer):
    class Meta:
        model = Classlist
        fields = ['id', 'name', 'professor', 'day1', 'day2', 'starttime1',
                  'endtime1', 'starttime2', 'endtime2', 'place', 'classtime']


class UserClasslistSerializer(serializers.ModelSerializer):
    userclass = serializers.PrimaryKeyRelatedField(many=True, queryset=Classlist.objects.all())
    # userclass = Classserializer(many=True, read_only=True)
    # user = serializers.PrimaryKeyRelatedField(queryset=UserProfile.objects.all())

    class Meta:
        model = UserClasslist
        fields = ['user', 'userclass']

class UserClasslistGETSerializer(serializers.ModelSerializer):
    userclass = Classserializer(many=True)
    user = serializers.PrimaryKeyRelatedField(queryset=UserProfile.objects.all())

    class Meta:
        model = UserClasslist
        fields = ['user', 'userclass']