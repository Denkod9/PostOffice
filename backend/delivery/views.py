from django.shortcuts import render
from .models import Delivery
from .serializers import DeliverySerializer, DeliveryTableSerializer

from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


# Путь для чтения данных в таблицу для отображения всех данных с ID
class DeliveryGetTableView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Delivery
        delivery = Delivery.objects.all()
        # сериализировать объекты
        serializer = DeliveryTableSerializer(delivery, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)


# Получить и добавить Delivery
class DeliveryGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Delivery
        delivery = Delivery.objects.all()
        # сериализировать объекты
        serializer = DeliverySerializer(delivery, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = DeliverySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить Delivery по id
class DeliveryDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return Delivery.objects.get(id=pk)

        except Delivery.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        delivery = self.get_object(pk)
        serializer = DeliverySerializer(delivery)
        return Response(serializer.data)

    def put(self, request, pk):
        delivery = self.get_object(pk)
        serializer = DeliverySerializer(delivery, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        delivery = self.get_object(pk)
        delivery.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
