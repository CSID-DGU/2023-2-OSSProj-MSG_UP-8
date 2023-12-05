from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserTimetableViewSet

router = DefaultRouter()
router.register(r'classlist', UserTimetableViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
