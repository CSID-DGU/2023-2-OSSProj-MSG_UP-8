from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist

from .models import ClassPage, UserProfile
from .serializers import ClassPageSerializer, UserClasspageSerializer
from eclass.models import UserClasslist


class ClassPageView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # request에서 user_profile_id를 추출하고 UserProfile 인스턴스를 조회
            user_profile_id = request.data.get('userprofile_id')
            user_profile = UserProfile.objects.get(id=user_profile_id)

            user_classlist = UserClasslist.objects.get(user=user_profile)

            # ClassPage 인스턴스 생성
            class_page = ClassPage(
                ClassUser=user_profile, ClassPage=user_classlist)
            class_page.save()

            serializer = ClassPageSerializer(class_page)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except ObjectDoesNotExist:
            # UserProfile 인스턴스가 없는 경우
            return Response({'error': '유효한 UserProfile 또는 UserClasslist 인스턴스가 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # 기타 예외 처리
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request):

        try:
            user_profile = UserProfile.objects.get(user=request.user)
            user_classlist = UserClasslist.objects.get(user=user_profile)

            class_page, created = ClassPage.objects.get_or_create(
                ClassUser=user_profile, ClassPage=user_classlist)
            serializer = ClassPageSerializer(class_page)
            return Response(serializer.data)

        except UserProfile.DoesNotExist:
            return Response({'error': 'UserProfile 인스턴스를 찾을 수 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        except UserClasslist.DoesNotExist:
            return Response({'error': 'UserClasslist 인스턴스를 찾을 수 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ClassDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, class_id):
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            class_info = UserClasslist.objects.get(id=class_id, user=user_profile)
            serializer = UserClasspageSerializer(class_info)

            return Response(serializer.data)
        
        except UserProfile.DoesNotExist:
            return Response({'error': 'UserProfile 인스턴스를 찾을 수 없습니다.'}, status=status.HTTP_404_NOT_FOUND)
        
        except UserClasslist.DoesNotExist:
            return Response({'error': '강의를 찾을 수 없습니다.'}, status=status.HTTP_404_NOT_FOUND)
