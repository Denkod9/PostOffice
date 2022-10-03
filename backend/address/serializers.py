from rest_framework import serializers
from .models import Street, Address, PostOfficeInfo


class StreetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Street
        fields = ('id', 'type_street', 'street')


class AddressSerializer(serializers.ModelSerializer):
    # street = serializers.ReadOnlyField(source='street.street')

    class Meta:
        model = Address
        # fields = ('id', 'street', 'house', 'flat', 'district')
        fields = ('id', 'street', 'house', 'flat')


class AddressTableSerializer(serializers.ModelSerializer):
    street = serializers.ReadOnlyField(source='street.street')

    class Meta:
        model = Address
        # fields = ('id', 'street', 'house', 'flat', 'district')
        fields = ('id', 'street', 'house', 'flat')


# Сериализатор для чтения данных в таблицу для отображения всех данных с ID
class PostOfficeInfoTableSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    address = serializers.CharField()
    manager_info = serializers.CharField()


class PostOfficeInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostOfficeInfo
        fields = ('id', 'title', 'address', 'manager_info')





