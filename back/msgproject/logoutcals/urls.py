from django.urls import path
from .views import ScheduleListView, ScheduleView

urlpatterns = [
    path('schedulelist/', ScheduleListView.as_view(), name='list-schedules'),
    path('schedule/<int:pk>/', ScheduleView.as_view(), name='schedule'),
]