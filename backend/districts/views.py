from django.shortcuts import render
from .models import District, DistrictStreet
from .serializers import (
    DistrictSerializer,
    DistrictStreetSerializer,
    DistrictStreetTableSerializer,
    DistrictTableSerializer
)

from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


# region Отчеты
# Список участков
# class DistrictView(APIView):
#     # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
#     permission_classes = (AllowAny,)
#
#     def get(self, request):
#         district = District.objects.all()
#         # сериализировать объекты
#         serializer = DistrictTableSerializer(district, many=True)
#         # вернуть ответ в json, safe(сохранять) = False
#         return Response(serializer.data)


# Список участков
class DistrictSubscribersView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        district = DistrictStreet.objects.filter()
        # сериализировать объекты
        # вернуть ответ в json, safe(сохранять) = False
        return Response()
# endregion


# Путь для чтения данных в таблицу для отображения всех данных с ID
class DistrictTableGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из District
        district = District.objects.all()
        # сериализировать объекты
        serializer = DistrictTableSerializer(district, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)


# Путь для чтения данных в таблицу для отображения всех данных с ID
class DistrictStreetTableGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из District
        district_street = DistrictStreet.objects.all()
        # сериализировать объекты
        serializer = DistrictStreetTableSerializer(district_street, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)


# Получить и добавить District
class DistrictGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из District
        district = District.objects.all()
        # сериализировать объекты
        serializer = DistrictSerializer(district, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = DistrictSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить District по id
class DistrictDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return District.objects.get(id=pk)

        except District.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        district = self.get_object(pk)
        serializer = DistrictSerializer(district)
        return Response(serializer.data)

    def put(self, request, pk):
        district = self.get_object(pk)
        serializer = DistrictSerializer(district, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        district = self.get_object(pk)
        district.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Получить и добавить DistrictStreet
class DistrictStreetGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Article
        district_street = DistrictStreet.objects.all()
        # сериализировать объекты
        serializer = DistrictStreetSerializer(district_street, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = DistrictStreetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить DistrictStreet по id
class DistrictStreetDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return DistrictStreet.objects.get(id=pk)

        except DistrictStreet.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        district_street = self.get_object(pk)
        serializer = DistrictStreetSerializer(district_street)
        return Response(serializer.data)

    def put(self, request, pk):
        district_street = self.get_object(pk)
        serializer = DistrictStreetSerializer(district_street, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        district_street = self.get_object(pk)
        district_street.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
