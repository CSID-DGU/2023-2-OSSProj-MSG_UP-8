from django.shortcuts import redirect
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

from .models import UserProfile, Classlist, UserClasslist
# from .serializers import UserClasslistSerializer
from .serializers import UserProfileSerializer, Classserializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        student_id = request.data.get('student_id')
        name = request.data.get('name')
        password = request.data.get('password')

        # 사용자 생성 및 학번, 이름 저장
        user = User.objects.create_user(username=student_id, password=password)
        user_profile = UserProfile(user=user, student_id=student_id, name=name)
        user_profile.save()

        return Response({'message': 'User registered successfully'})

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(user_profile)
        return Response(serializer.data)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        student_id = request.data.get('student_id')
        password = request.data.get('password')

        # 학번과 비밀번호로 사용자 인증
        user = authenticate(request, username=student_id, password=password)
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'message': 'Login successful', 'token': token.key})
        else:
            return Response({'message': 'Login failed'}, status=401)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'message': 'Logout successful'})


class ClassListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        classlists = Classlist.objects.all()  # 모든 이벤트를 가져오도록 수정
        serializer = Classserializer(classlists, many=True)
        return Response(serializer.data)



