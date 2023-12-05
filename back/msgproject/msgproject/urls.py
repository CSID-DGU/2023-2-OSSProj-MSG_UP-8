from django.contrib import admin
from django.urls import path, include
from eclass.views import RegisterView, LoginView, LogoutView, ProfileView, ClassListView, UserClassListView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('eclass/', include('eclass.urls')),
    path('register/', RegisterView.as_view(), name='register'),
    path('register/classlist/', ClassListView.as_view(), name='classlist'),
    path('register/userclasslist/', UserClassListView.as_view(), name='userclasslist'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('logincals/', include('logincals.urls')),
    path('logoutcals/', include('logoutcals.urls')),
    path('todo/', include('todo.urls')),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('timetable/', include('timetable.urls')),
    path('class/', include('classpage.urls')),
]