from rest_framework import serializers
from .models import ClassPage

class ClassPageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ClassPage
        fields = ['ClassPage, ClassUser']