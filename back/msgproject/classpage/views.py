from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist

from .models import ClassPage, UserProfile
from .serializers import ClassPageSerializer

class ClassPageView(APIView):
    permission_classes = [IsAuthenticated]

    def create_classpage(request):
        try:
            # request에서 user_profile_id를 추출하고 UserProfile 인스턴스를 조회
            user_profile_id = request.data.get('user_profile_id')
            user_profile = UserProfile.objects.get(id=user_profile_id)

            # ClassPage 인스턴스 생성
            class_page = ClassPage(ClassUser=user_profile)
            class_page.save()

            return Response({'message': 'ClassPage created successfully.'})

        except ObjectDoesNotExist:
            # UserProfile 인스턴스가 없는 경우
            return Response({'error': '유효한 UserProfile 인스턴스가 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # 기타 예외 처리
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    # def get(self, request):
    #     user_profile = UserProfile.objects.get(id=request.user.id)
    #     class_page, created = ClassPage.objects.get_or_create(ClassUser=user_profile)
    #     serializer = ClassPageSerializer(class_page, many=True)
    #     class_page.ClassPage.set(serializer.data['ClassPage_id'])
    #     class_page.save()
        
    #     return Response(serializer.data)