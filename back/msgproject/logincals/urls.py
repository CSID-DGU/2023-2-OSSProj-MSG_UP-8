from django.urls import path
from .views import EventCreateView, EventListView, EventDetailView

urlpatterns = [
    path('events/', EventCreateView.as_view(), name='create-event'),
    path('events/list/', EventListView.as_view(), name='list-events'),
    path('events/detail/<int:pk>/', EventDetailView.as_view(), name='event-detail'),
]