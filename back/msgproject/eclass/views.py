# from django.shortcuts import render
from rest_framework import status, generics, mixins
# from rest_framework.response import Response
# from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from .models import *
from .serializers import *

# Create your views here.


class Student(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class idStudent(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

# class StudentAPI(APIView):  # /student
#     def get(self, request):
#         student = Student.objects.all()
#         serializer = StudentSerializer(student, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     def post(self, request):
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class idStudentAPI(APIView):  # /student/{idstudent}
#     def get(self, request, id):
#         student = get_object_or_404(Student, id=id)
#         serializer = StudentSerializer(student)
#         return Response(serializer.data, status=status.HTTP_200_OK)
