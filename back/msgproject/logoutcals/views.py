from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Schedule
from .serializers import ScheduleSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

class ScheduleListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        schedules = Schedule.objects.all()  # 모든 이벤트를 가져오도록 수정
        serializer = ScheduleSerializer(schedules, many=True)
        return Response(serializer.data)

class ScheduleView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            schedule = Schedule.objects.get(pk=pk)  # 기본 키를 사용하여 스케줄 조회
            serializer = ScheduleSerializer(schedule)
            return Response(serializer.data)
        except Schedule.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)