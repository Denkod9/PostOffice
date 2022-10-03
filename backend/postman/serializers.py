from rest_framework import serializers
from .models import Postman
# from accounts.models import UserAccount


class PostmanSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')
    class Meta:
        model = Postman
        fields = ('id', 'user', 'employment_date', 'topicality')


