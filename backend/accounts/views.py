from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from .models import UserAccount
from .serializers import UserCreateSerializer, UserCreateSerializerTable

from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.permissions import AllowAny

from editions.models import Edition, Subscription
from address.models import Address

from datetime import date


# region Отчеты
# Подсчитать количество всех подписчиков
class CountSubscribersGet(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        subscribers = UserAccount.objects.all()
        count = subscribers.count()
        return Response(count)


# Подсчитать сколько подписалось подписчиков на определенное издания за текущий год
class CountSubscribersOnEdition(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        subscribers = UserAccount.objects.all()
        for subscriber in subscribers:
            ss = date - subscribers.date_of_birth
        # editions = Edition.objects.all()
        # subscriptions = Subscription.objects.all()
        count = Subscription.objects.dates('date_of_subscription', 'year')
        # for subscription in Subscription:
        #     if subscription.date_of_subscription == datetime.now().year:
        #         count = subscription.edition.count()
        #
        #         # count_subscriptions = subscriptions.count()
        #         return Response(count)
        return Response(count)


# region Возроста подписчиков
# Подсчитать количество всех подписчиков
class CountSubscribersOlds30_40Get(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        # subscribers = UserAccount.objects.exclude(date_of_birth=date.today()).filter(date_of_birth__year=date.today().year-1947)
        # subscribers = UserAccount.objects.exclude(date_of_birth__year=date.today().year-1947)
        # year70_80 = UserAccount.objects.exclude(date_of_birth__year=date.today().year).filter(date_of_birth__year=date.today().year-1942)
        year30_40 = UserAccount.objects.exclude(date_of_birth__gte=date(1992, 1, 1)).filter(date_of_birth__gte=date(1982, 1, 1))
        count = year30_40.count()
        return Response(count)


# Подсчитать количество всех подписчиков
class CountSubscribersOlds20_30Get(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        year20_30 = UserAccount.objects.exclude(date_of_birth__gte=date(2002, 1, 1)).filter(date_of_birth__gte=date(1992, 1, 1))
        count = year20_30.count()
        return Response(count)


# Подсчитать количество всех подписчиков
class CountSubscribersOlds17_20Get(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        year17_20 = UserAccount.objects.exclude(date_of_birth__gte=date(2005, 1, 1)).filter(date_of_birth__gte=date(2002, 1, 1))
        count = year17_20.count()
        return Response(count)

# endregion

# endregion


# TODO: Формы для фронта
# Редактировать или удалить подписчика
class ProfileGetSubscriberView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return UserAccount.objects.get(id=pk)

        except UserAccount.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        street = self.get_object(pk)
        serializer = UserCreateSerializerTable(street)
        return Response(serializer.data)


# Получить всех подписчиков c получением данных из ID для таблицы
class GetUsersTableView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        subscribers = UserAccount.objects.all()
        # сериализировать объекты
        serializer = UserCreateSerializerTable(subscribers, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return JsonResponse(serializer.data, safe=False)


# Добавить пользователя
class ProfileUserView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        subscribers = UserAccount.objects.all()
        # сериализировать объекты
        serializer = UserCreateSerializerTable(subscribers, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить всех подписчиков
class GetUsersView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        subscribers = UserAccount.objects.all()
        # сериализировать объекты
        serializer = UserCreateSerializer(subscribers, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return JsonResponse(serializer.data, safe=False)


# Добавить пользователя
class SubscriberAddView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = UserCreateSerializerTable(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Добавить пользователя
class EditSubscriberView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Редактировать или удалить подписчика
class SubscriberEditDeleteView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def put(self, request, pk):
        subscriber = self.get_object(pk)
        serializer = UserCreateSerializer(subscriber, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # return Response(serializer.data)

    def delete(self, request, pk):
        subscriber = UserAccount.objects.get(id=pk)
        serializer = UserCreateSerializer(subscriber, many=False)
        subscriber.delete()
        return JsonResponse(serializer.data, safe=False)