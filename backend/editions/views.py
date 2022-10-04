from asyncio.windows_events import NULL
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views import View

from .models import Edition, EditionType, Subscription
from .serializers import (
    EditionSerializer,
    EditionTypeSerializer,
    SubscriptionSerializer,
    SubscriptionCreateSerializer,
    EditionCreateSerializer,
    SubscriptionTableSerializer
)

from accounts.models import UserAccount

from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import status
from rest_framework import viewsets

from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

from datetime import date
from collections import Counter


# region Отчеты
# Подсчитать сколько всего изданий
class CountAllEditionsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition = Edition.objects.all()
        count = edition.count()

        return HttpResponse(count)


# Подсчитать сколько всего изданий
class CountSubscriptionOnEditionsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.all()
        count = subscription.count()
        return HttpResponse(count)


# region Издания по возростанию цены
# Подсчитать издания от 100 до 1000
class CountPriceEditions_100_1000(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        price_100_1000 = Edition.objects.exclude(price__gte='1000').filter(price__gte='100')
        count = price_100_1000.count()
        return HttpResponse(count)


# Подсчитать издания от 1000 до 3000
class CountPriceEditions_1000_3000(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        price_1000_3000 = Edition.objects.exclude(price__gte='3000').filter(price__gte='1000')
        count = price_1000_3000.count()
        return HttpResponse(count)


# Подсчитать издания от 3000 до 5000
class CountPriceEditions_3000_5000(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        price_3000_5000 = Edition.objects.exclude(price__gte='5000').filter(price__gte='3000')
        count = price_3000_5000.count()
        return HttpResponse(count)


# Подсчитать издания от 5000 до 10000
class CountPriceEditions_5000_10000(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        price_5000_10000 = Edition.objects.exclude(price__gte='10000').filter(price__gte='5000')
        count = price_5000_10000.count()
        return HttpResponse(count)
# endregion


# region Издания по жанрам
# Подсчитать издания по жанру Журнал
class CountEditionTypeMagazine(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='1')
        count = edition_type.count()
        return HttpResponse(count)


# Подсчитать издания по жанру Газета
class CountEditionTypeNewspaper(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='2')
        count = edition_type.count()
        return HttpResponse(count)


# Подсчитать издания по жанру Книга
class CountEditionTypeBook(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='3')
        count = edition_type.count()
        return HttpResponse(count)


# Подсчитать издания по жанру Альмонах
class CountEditionTypeAlmanac(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='4')
        count = edition_type.count()
        return HttpResponse(count)


# Подсчитать издания по жанру Сборник
class CountEditionTypeCollection(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='5')
        count = edition_type.count()
        return HttpResponse(count)


# Подсчитать издания по жанру Ежегодник
class CountEditionTypeYearbook(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='6')
        count = edition_type.count()
        return HttpResponse(count)


# Подсчитать издания по жанру Справочник
class CountEditionTypeDirectory(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        edition_type = Edition.objects.filter(edition_type='7')
        count = edition_type.count()
        return HttpResponse(count)
# endregion


# region Подписки по годам
# Подсчитать сколько было подписок за текущий год
class CountSubscriptionAllYearsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        # subscription = Subscription.objects.all()
        # subscription = Subscription.objects.exclude(date_of_subscription__gte=date.today()).filter(date_of_subscription__gte=date(2021, 1, 1))
        subscription = Subscription.objects.exclude(date_of_subscription=date.today())
        # subscription = Subscription.objects.exclude(date_of_subscription=date(2019, 9, 10))
        # subscription = Subscription.objects.exclude(date_of_subscription__gte=date.today())
        count = subscription.count()
        # return HttpResponse(f'subscription = {count}')
        return HttpResponse(count)


# Подсчитать сколько было подписок за текущий год
class CountSubscriptionCurrentYearView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.filter(date_of_subscription__year=date.today().year)
        count = subscription.count()
        return HttpResponse(count)


# Подсчитать сколько было подписок за прошедший год
class CountSubscriptionLastYearView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.filter(date_of_subscription__year=date.today().year-1)
        count = subscription.count()
        return HttpResponse(count)


# Подсчитать сколько было подписок за прошедший год
class CountSubscription2020YearView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.filter(date_of_subscription__year=date.today().year-2)
        count = subscription.count()
        return HttpResponse(count)


# Подсчитать сколько было подписок за прошедший год
class CountSubscription2019YearView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.filter(date_of_subscription__year=date.today().year-3)
        count = subscription.count()
        return HttpResponse(count)


# Подсчитать сколько было подписок за прошедший год
class CountSubscription2018YearView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.filter(date_of_subscription__year=date.today().year-4)
        count = subscription.count()
        return HttpResponse(count)


# Подсчитать сколько было подписок за прошедший год
class CountSubscription2017YearView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить объект из get_object
        subscription = Subscription.objects.filter(date_of_subscription__year=date.today().year-5)
        count = subscription.count()
        return HttpResponse(count)
# endregion


# region Profile
class SubscriptionsProfileView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        # получить объект из get_object
        subscriptions = Subscription.objects.filter(subscriber=pk).filter(is_subscription=1)
        count = subscriptions.count()
        return Response(count)


class UnSubscriptionsProfileView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        # получить объект из get_object
        subscriptions = Subscription.objects.filter(subscriber=pk).filter(is_subscription=0)
        count = subscriptions.count()
        return Response(count)

# endregion

# endregion


# Издания для страницы изданий
class CurrentEditionsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request, num1, num2):
        # получить объект из get_object
        editions = Edition.objects.all().order_by('id')

        edition = editions[num1:num2]
        serializer = EditionSerializer(edition, many=True)
        return JsonResponse(serializer.data, safe=False)


# Путь для чтения данных в таблицу для отображения всех данных с ID
class SubscriptionTableView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        subscription = Subscription.objects.all()
        # сериализировать объекты
        serializer = SubscriptionTableSerializer(subscription, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)


# Получить все издания
class EditionView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        edition = Edition.objects.all()
        # сериализировать объекты
        serializer = EditionSerializer(edition, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = EditionCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditionDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return Edition.objects.get(id=pk)

        except Edition.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        edition = self.get_object(pk)
        serializer = EditionSerializer(edition)
        return Response(serializer.data)

    def put(self, request, pk):
        edition = self.get_object(pk)
        serializer = EditionCreateSerializer(edition, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        edition = self.get_object(pk)
        edition.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Получить все издания на которые подписаны
class EditionSubscriptionsView(View):
    def get(self, request):
        # получить все editions
        if request.method == 'GET':
            # получить все объекты из Edition
            my_editions = Subscription.objects.all()
            # сериализировать объекты
            serializer = SubscriptionSerializer(my_editions, many=True)
            # вернуть ответ в json, safe(сохранять) = False
            return JsonResponse(serializer.data, safe=False)


# Получить типы изданий
class EditionTypeView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из PostOffice
        edition_type = EditionType.objects.all()
        # сериализировать объекты
        serializer = EditionTypeSerializer(edition_type, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = EditionTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditionTypeDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return EditionType.objects.get(id=pk)

        except EditionType.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        edition_type = self.get_object(pk)
        serializer = EditionTypeSerializer(edition_type)
        return Response(serializer.data)

    def put(self, request, pk):
        edition_type = self.get_object(pk)
        serializer = EditionTypeSerializer(edition_type, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        edition_type = self.get_object(pk)
        edition_type.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Получить типы изданий
class EditionSubscriptionView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из PostOffice
        subscription = Subscription.objects.all()
        # сериализировать объекты
        serializer = SubscriptionSerializer(subscription, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = SubscriptionCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditionSubscriptionDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return Subscription.objects.get(id=pk)

        except Subscription.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        subscription = self.get_object(pk)
        serializer = SubscriptionSerializer(subscription)
        return Response(serializer.data)

    def put(self, request, pk):
        subscription = self.get_object(pk)
        serializer = SubscriptionTableSerializer(subscription, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        subscription = self.get_object(pk)
        subscription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Добавить издание
# class EditionAddView(APIView):
#     # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
#     permission_classes = (AllowAny,)
#
#     def post(self, request, image, index, title, price, edition_type, description):
#
#         new = Edition.objects.create(
#             image=image,
#             index=index,
#             title=title,
#             price=price,
#             edition_type=EditionType.objects.get(id=edition_type),
#             description=description
#         )
#         new.save()
#         # сериализировать объекты
#         # serializer = EditionTypeSerializer(new, data=request.data)
#         serializer = EditionSerializer(data=request.data)
#         if serializer.is_valid():
#             # serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             # return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)


# Добавить тип издания
# class EditionDeleteView(APIView):
#     # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
#     permission_classes = (AllowAny,)
#
#     def delete(self, request, id):
#         edition = Edition.objects.get(id=id)
#         serializer = EditionSerializer(edition, many=False)
#         edition.delete()
#         return JsonResponse(serializer.data, safe=False)


# Добавить тип издания
class EditionTypeAddView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def post(self, request, type_name):

        new = EditionType.objects.create(
            type_name=type_name
        )
        # new= Edition.objects.create(
        #     index='sdfsdfssss',
        #     title='sdfsdgf',
        #     price=subscriberPk,
        #     edition_type=EditionType.objects.get(id=editionPk)
        # )
        new.save()
        # сериализировать объекты
        # serializer = EditionTypeSerializer(new, data=request.data)
        serializer = EditionTypeSerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
        # return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


# Добавить тип издания
class EditionTypeDeleteView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def delete(self, request, id):
        my_editions = EditionType.objects.get(id=id)
        serializer = EditionTypeSerializer(my_editions, many=False)
        my_editions.delete()
        return JsonResponse(serializer.data, safe=False)


# Подписать на издание подписчика
class SubscribePersonView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    # permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, id):
        try:
            return Edition.objects.get(id=id)

        except Edition.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        # получить объект из get_object
        edition = self.get_object(id)
        serializer = EditionSerializer(edition)
        return Response(serializer.data)

    def post(self, request, subscriberPk, editionPk):

        new = Subscription.objects.create(
            subscriber=UserAccount.objects.get(id=subscriberPk),
            edition=Edition.objects.get(id=editionPk),
            is_subscription=True
        )
        # new= Edition.objects.create(
        #     index='sdfsdfssss',
        #     title='sdfsdgf',
        #     price=subscriberPk,
        #     edition_type=EditionType.objects.get(id=editionPk)
        # )
        new.save()
        # сериализировать объекты
        serializer = SubscriptionSerializer(new, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    # def patch(self, request, id):
    #     edition = self.get_object(id)
    #
    #     # Проверка на подписку если нет, то подписать
    #     if not edition.is_subscription:
    #         edition.is_subscription = True
    #
    #     edition.save(update_fields=["is_subscription"])
    #
    #     serializer = EditionSerializer(edition, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Отписать от издания подписчика
class UnSubscribePersonView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def patch(self, request, id):
        edition = Subscription.objects.get(id=id)
    
        # Проверка на подписку если нет, то подписать
        if edition.is_subscription:
            edition.is_subscription = False
    
        edition.save(update_fields=["is_subscription"])

        serializer = SubscriptionSerializer(edition, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
        # serializer = SubscriptionSerializer(edition, data=request.data)
        # if serializer.is_valid():
            # serializer.save()
            # return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        my_editions = Subscription.objects.get(id=id)
        serializer = SubscriptionSerializer(my_editions, many=False)
        my_editions.delete()
        return JsonResponse(serializer.data, safe=False)








