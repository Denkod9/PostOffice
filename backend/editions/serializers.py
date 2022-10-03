from rest_framework import serializers
from .models import Edition, EditionType, Subscription

from accounts.serializers import UserCreateSerializer
from accounts.models import UserAccount


class EditionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EditionType
        fields = ('id', 'type_name')


class SubscriptionSerializer(serializers.ModelSerializer):
    # subscriber = serializers.ReadOnlyField(source='subscriber.email')
    subscriber = serializers.EmailField(source='subscriber.email')
    # edition = serializers.ReadOnlyField(source='edition.title')
    # editions = EditionSerializer(many=False, read_only=True)

    class Meta:
        model = Subscription
        fields = ('id', 'subscriber', 'edition', 'date_of_subscription', 'duration', 'is_subscription')
        # fields = '__all__'


# Сериализатор для чтения данных в таблицу для отображения всех данных с ID
class SubscriptionTableSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    subscriber = serializers.CharField()
    edition = serializers.CharField()
    date_of_subscription = serializers.DateField()
    duration = serializers.CharField()
    is_subscription = serializers.IntegerField()


# Сериализатор для добовления подписки
class SubscriptionCreateSerializer(serializers.ModelSerializer):
    # subscriber = serializers.ReadOnlyField(source='subscriber.email')
    # subscriber = serializers.EmailField(source='subscriber.email')
    # edition = serializers.ReadOnlyField(source='edition.title')
    # editions = EditionSerializer(many=False, read_only=True)

    class Meta:
        model = Subscription
        fields = ('id', 'subscriber', 'edition', 'date_of_subscription', 'duration', 'is_subscription')
        # fields = '__all__'


class EditionSerializer(serializers.ModelSerializer):
    edition_type = serializers.ReadOnlyField(source='edition_type.type_name')
    editions = SubscriptionSerializer(many=True, read_only=True)
    # image = serializers.ImageField(required=False)

    class Meta:
        model = Edition
        fields = ('id', 'image', 'index', 'title', 'price', 'edition_type', 'description', 'editions')
        # fields = '__all__'


# Сериализатор для добовления подписки
class EditionCreateSerializer(serializers.ModelSerializer):
    # edition_type = serializers.ReadOnlyField(source='edition_type.type_name')
    # editions = SubscriptionSerializer(many=True, read_only=True)
    # image = serializers.ImageField(required=False)

    class Meta:
        model = Edition
        fields = ('id', 'image', 'index', 'title', 'price', 'edition_type', 'description', 'editions')
        # fields = '__all__'






