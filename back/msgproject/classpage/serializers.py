from rest_framework import serializers
from .models import ClassPage
from eclass.models import UserClasslist

class ClassPageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClassPage
        fields = ['ClassPage', 'ClassUser']


class UserClasspageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserClasslist
        fields = '__all__'
