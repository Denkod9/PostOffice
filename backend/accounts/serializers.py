from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from .models import Role

from rest_framework import serializers

# from .models import Role
# from address.models import Address

User = get_user_model()


class UserCreateSerializerTable(UserCreateSerializer, serializers.Serializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    date_of_birth = serializers.DateField()
    role = serializers.CharField()
    phone = serializers.CharField()
    # address = serializers.IntegerField()
    address = serializers.CharField()
    is_active = serializers.BooleanField()
    is_staff = serializers.BooleanField()
    password = serializers.CharField()


# class UserProfileSerializerTable(UserCreateSerializer, serializers.Serializer):
#     email = serializers.EmailField()
#     first_name = serializers.CharField()
#     last_name = serializers.CharField()
#     date_of_birth = serializers.DateField()
#     role = serializers.CharField()
#     phone = serializers.CharField()
#     # address = serializers.IntegerField()
#     address = serializers.CharField()
#     is_active = serializers.BooleanField()
#     is_staff = serializers.BooleanField()
#     password = serializers.CharField()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        # fields = ('id', 'email', 'first_name', 'last_name',
        #           'role', 'phone',
        #           'typeStreet', 'street', 'house', 'flat'
        #           , 'password')
        fields = ('id',
                  'email',
                  'first_name',
                  'last_name',
                  'date_of_birth',
                  'role',
                  'phone',
                  'address',
                  'is_active',
                  'is_staff',
                  'password'
        )



