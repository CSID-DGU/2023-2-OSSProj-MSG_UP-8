from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import TodoItem
from .serializers import TodoItemSerializer

class TodoItemCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = TodoItemSerializer(data=data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class TodoItemListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        todoitems = TodoItem.objects.filter(owner=request.user.userprofile)
        serializer = TodoItemSerializer(todoitems, many=True)
        return Response(serializer.data)

class TodoItemDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return TodoItem.objects.get(pk=pk, owner=self.request.user.userprofile)
        except TodoItem.DoesNotExist:
            return None

    def get(self, request, pk):
        todoitem = self.get_object(pk)
        if todoitem:
            serializer = TodoItemSerializer(todoitem)
            return Response(serializer.data)
        return Response({'message': 'TodoItem not found'}, status=404)

    def put(self, request, pk):
        todoitem = self.get_object(pk)
        if todoitem:
            serializer = TodoItemSerializer(todoitem, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        return Response({'message': 'TodoItem not found'}, status=404)

    def delete(self, request, pk):
        todoitem = self.get_object(pk)
        if todoitem:
            todoitem.delete()
            return Response({'message': 'TodoItem deleted'})
        return Response({'message': 'TodoItem not found'}, status=404)