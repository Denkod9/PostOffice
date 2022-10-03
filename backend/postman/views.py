from django.shortcuts import render
from django.http import HttpResponse

from accounts.models import UserAccount
from districts.models import DistrictStreet, District
from .models import Postman
from .serializers import PostmanSerializer

from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


# Отчеты
# Подсчитать количество всех почтальонов
class CountPostmansView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Postman
        postmans = Postman.objects.all()
        count = postmans.count()
        return Response(count)


# Отчеты
# Подсчитать количество всех подписчиков
class CountPostmanDistrictssGet(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Edition
        postmans = Postman.objects.all()
        districts = DistrictStreet.objects.find(postman=postmans)
        district = District.objects.find(number=districts)
        # count = district.count()
        return Response(district)


# Подсчитать количество участков у каждого почтальона
class CountDistrictsPostmanView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Postman
        postmans = Postman.objects.all()
        count = postmans.count()
        return Response(count)


# Добовление почтальона
class AddPostmanView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def post(self, request, postmanId, employment_date, topicality):
        postman = Postman.objects.create(
            user = UserAccount.objects.get(id=postmanId),
            employment_date = employment_date,
            topicality = topicality
        )

        # сериализировать объекты
        serializer = PostmanSerializer(postman, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить и добавить Postman
class PostmanGetView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    def get(self, request):
        # получить все объекты из Postman
        postman = Postman.objects.all()
        # сериализировать объекты
        serializer = PostmanSerializer(postman, many=True)
        # вернуть ответ в json, safe(сохранять) = False
        return Response(serializer.data)

    def post(self, request):
        # сериализировать объекты
        serializer = PostmanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Получить редактировать и удалить Postman по id
class PostmanDetailsView(APIView):
    # Разрешить всем пользователям (аутентифицированным и нет) доступ к данному эндпоинту.
    permission_classes = (AllowAny,)

    # функция get_object получает id объекта и передает ее другим функциям
    def get_object(self, pk):
        try:
            return Postman.objects.get(id=pk)

        except Postman.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        # получить объект из get_object
        postman = self.get_object(pk)
        serializer = PostmanSerializer(postman)
        return Response(serializer.data)

    def put(self, request, pk):
        postman = self.get_object(pk)
        serializer = PostmanSerializer(postman, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        postman = self.get_object(pk)
        postman.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)







