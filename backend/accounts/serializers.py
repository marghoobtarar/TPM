
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()
from .models import UserAccount


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password','cell_number','date_of_birth','picture')
from rest_framework import serializers
# from django.contrib.auth.models import User

from django.contrib.auth.password_validation import validate_password

class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)



    def validate_new_password(self, value):
        validate_password(value)
        return value
class userchangeSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = (
            'date_of_birth',
            'picture',
            'first_name'
        )
    
    def validate_new_password(self, value):
        validate_password(value)
        return value
    



