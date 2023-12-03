from django.urls import path
from .views import ClassPageView

urlpatterns = [
    path('', ClassPageView.as_view())
]
# 각 강의실 id를 pk로 하는 개별 강의실 url도 제작해야함!