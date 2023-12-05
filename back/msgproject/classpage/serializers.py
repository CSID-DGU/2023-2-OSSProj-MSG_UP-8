from rest_framework import serializers
from .models import ClassPage
from eclass.models import Classlist#, UserClasslist


class ClassPageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClassPage
        fields = ['ClassPage', 'ClassUser']


class ClassDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classlist
        fields = ['name']


# class UserClasspageSerializer(serializers.ModelSerializer):
#     # userclass = serializers.SerializerMethodField()
#     userclass = ClassDetailSerializer(many=True, read_only=True)

#     class Meta:
#         model = UserClasslist
#         fields = ['user', 'userclass']

#     # def get_userclass(self, obj):
#     #     return [str(class_instance) for class_instance in obj.userclass.all()]
