from django.urls import path
from .views import TodoItemCreateView, TodoItemListView, TodoItemDetailView

urlpatterns = [
    path('todoitems/', TodoItemCreateView.as_view(), name='create-todoitem'),
    path('todoitems/list/', TodoItemListView.as_view(), name='list-todoitems'),
    path('todoitems/detail/<int:pk>/', TodoItemDetailView.as_view(), name='todoitem-detail'),
]