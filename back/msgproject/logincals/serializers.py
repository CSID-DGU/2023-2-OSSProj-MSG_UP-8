from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'in_title', 'in_startdate', 'in_enddate']

    def create(self, validated_data):
        # 현재 로그인한 사용자를 owner로 설정
        user_profile = self.context['request'].user.userprofile
        validated_data['owner'] = user_profile
        return Event.objects.create(**validated_data)