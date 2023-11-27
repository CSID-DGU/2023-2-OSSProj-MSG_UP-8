from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Event
from .serializers import EventSerializer

class EventCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = EventSerializer(data=data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.validated_data)
        return Response(serializer.errors, status=400)

class EventListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        events = Event.objects.filter(owner=request.user.userprofile)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

class EventDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk, owner=self.request.user.userprofile)
        except Event.DoesNotExist:
            return None

    def get(self, request, pk):
        event = self.get_object(pk)
        if event:
            serializer = EventSerializer(event)
            return Response(serializer.data)
        return Response({'message': 'Event not found'}, status=404)

    def put(self, request, pk):
        event = self.get_object(pk)
        if event:
            serializer = EventSerializer(event, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        return Response({'message': 'Event not found'}, status=404)

    def delete(self, request, pk):
        event = self.get_object(pk)
        if event:
            event.delete()
            return Response({'message': 'Event deleted'})
        return Response({'message': 'Event not found'}, status=404)