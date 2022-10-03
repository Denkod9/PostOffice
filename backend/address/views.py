from django.shortcuts import render
from .models import Street, Address, PostOfficeInfo
from .serializers import (
    StreetSerializer,
    AddressSerializer,
    AddressTableSerializer,
    PostOfficeInfoSerializer,
    PostOfficeInfoTableSerializer
)

from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


# Путь для чтения данных в таблицу для отображения всех данных с ID
class AddressTableGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        address = Address.objects.all()
        # сериализировать объекты
        serializer = AddressTableSerializer(address, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)


# Путь для чтения данных в таблицу для отображения всех данных с ID
class PostOfficeInfoTableGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        poi = PostOfficeInfo.objects.all()
        # сериализировать объекты
        serializer = PostOfficeInfoTableSerializer(poi, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)


# Получить и добавить Street
class StreetGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Street
        street = Street.objects.all()
        # сериализировать объекты
        serializer = StreetSerializer(street, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = StreetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить Street по id
class StreetDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return Street.objects.get(id=pk)

        except Street.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        street = self.get_object(pk)
        serializer = StreetSerializer(street)
        return Response(serializer.data)

    def put(self, request, pk):
        street = self.get_object(pk)
        serializer = StreetSerializer(street, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        street = self.get_object(pk)
        street.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Получить и добавить Address
class AddressGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Address
        address = Address.objects.all()
        # сериализировать объекты
        serializer = AddressSerializer(address, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить Address по id
class AddressDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return Address.objects.get(id=pk)

        except Address.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        address = self.get_object(pk)
        serializer = AddressSerializer(address)
        return Response(serializer.data)

    def put(self, request, pk):
        address = self.get_object(pk)
        serializer = AddressSerializer(address, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        address = self.get_object(pk)
        address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Получить и добавить PostOfficeInfo
class PostOfficeInfoGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из PostOffice
        post_office = PostOfficeInfo.objects.all()
        # сериализировать объекты
        serializer = PostOfficeInfoSerializer(post_office, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = PostOfficeInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить PostOfficeInfo по id
class PostOfficeInfoDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return PostOfficeInfo.objects.get(id=pk)

        except PostOfficeInfo.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        post_office = self.get_object(pk)
        serializer = PostOfficeInfoSerializer(post_office)
        return Response(serializer.data)

    def put(self, request, pk):
        post_office = self.get_object(pk)
        serializer = PostOfficeInfoSerializer(post_office, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post_office = self.get_object(pk)
        post_office.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






