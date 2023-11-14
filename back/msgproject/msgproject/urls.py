from django.contrib import admin
from django.urls import path, include
from eclass.views import RegisterView, LoginView, LogoutView, UserClasslistView, ProfileView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('eclass/', include('eclass.urls')),
    path('register/', RegisterView.as_view(), name='register'),
    path('register/classpick/', UserClasslistView.as_view(), name='classpick'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('logincals/', include('logincals.urls')),
    path('logoutcals/', include('logoutcals.urls')),
    path('todo/', include('todo.urls')),
    path('profile/', ProfileView.as_view(), name='profile'),
]