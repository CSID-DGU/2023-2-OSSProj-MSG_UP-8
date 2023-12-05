from django.urls import path
from .views import ClassPageView, ClassDetailView

urlpatterns = [
    path('', ClassPageView.as_view()),
    path('<int:class_id>/', ClassDetailView.as_view())
]