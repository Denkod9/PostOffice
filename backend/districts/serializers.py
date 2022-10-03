from rest_framework import serializers
from .models import District, DistrictStreet


# Сериализатор для чтения данных в таблицу для отображения всех данных с ID
class DistrictStreetTableSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    postman = serializers.CharField()
    street = serializers.CharField()


# Сериализатор для чтения данных в таблицу для отображения всех данных с ID
class DistrictTableSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    number = serializers.CharField()
    title = serializers.CharField()
    district_street = serializers.CharField()


class DistrictStreetSerializer(serializers.ModelSerializer):
    # street = serializers.ReadOnlyField(source='street.street')

    class Meta:
        model = DistrictStreet
        fields = ('id', 'postman', 'street')


class DistrictSerializer(serializers.ModelSerializer):
    # district_street = serializers.ReadOnlyField(source='district_street.street')

    class Meta:
        model = District
        fields = ('id', 'number', 'title', 'district_street')
        # fields = '__all__'


