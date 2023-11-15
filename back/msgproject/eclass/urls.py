from django.urls import path
from .views import ClassListView

urlpatterns = [
    path('classlist/', ClassListView.as_view(), name='list-classlist'),
]