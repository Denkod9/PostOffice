from rest_framework import serializers
from .models import Delivery


# Сериализатор для чтения данных в таблицу для отображения всех данных с ID
class DeliveryTableSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    subscriber = serializers.CharField()
    edition = serializers.CharField()
    expected = serializers.BooleanField()


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = ('id', 'subscriber', 'edition', 'expected')
