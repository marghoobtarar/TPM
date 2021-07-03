from django.urls import path
from django.contrib.auth import views as auth_views
from . views import *
urlpatterns = [
    path('update_password/', UpdatePassword.as_view(), name='changepassword'),
    path('update_user/', UpdateUser.as_view(), name='update user'),
    path('user_get/', UserGet.as_view(), name='get the user'),



]