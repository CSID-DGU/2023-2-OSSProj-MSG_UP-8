# from django.contrib.auth.models import User
# from rest_framework import generics, status
# from rest_framework.response import Response
# from .serializers import RegisterSerializer, LoginSerializer


# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer


# class LoginView(generics.GenericAPIView):
#     serializer_class = LoginSerializer

#     def post(self, request):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         token = serializer.validated_data
#         return Response({"token": token.key}, status=status.HTTP_200_OK)


from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import UserProfile
# from .serializers import UserProfileSerializer
from rest_framework.authtoken.models import Token

class RegisterView(APIView):
    def post(self, request):
        student_id = request.data.get('student_id')
        name = request.data.get('name')
        password = request.data.get('password')

        # 사용자 생성 및 학번, 이름 저장
        user = User.objects.create_user(username=student_id, password=password)
        user_profile = UserProfile(user=user, student_id=student_id, name=name)
        user_profile.save()

        return Response({'message': 'User registered successfully'})

class LoginView(APIView):
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
    permission_classes = []

    def post(self, request):
        logout(request)
        return Response({'message': 'Logout successful'})