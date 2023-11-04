from rest_framework import serializers
from .models import TodoItem

class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ['todo_title', 'completed', 'due_date',]

    def create(self, validated_data):
        # 현재 로그인한 사용자를 owner로 설정
        user_profile = self.context['request'].user.userprofile
        validated_data['owner'] = user_profile
        return TodoItem.objects.create(**validated_data)