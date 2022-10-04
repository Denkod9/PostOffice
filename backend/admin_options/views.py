from django.core.management import call_command
from datetime import date
import os

from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


# Сделать дамп БД
class DumbDataView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        date_today = date.today()
        
        output = open(f'./backups/database/{date_today}_dump.json','w', encoding="utf-8")
        call_command('dumpdata', 'accounts', 'editions', 'postman', 'address', 'delivery', 'districts',format='json',indent=2,stdout=output)
        output.close()
        return Response()


# Загрузить данные с дампа
class LoadDataView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):

        path = ('./backups/database/')
        dir_list = [os.path.join(path, x) for x in os.listdir(path)]
        if(dir_list):
            # Создадим список из путей к файлам и дат их создания.
            date_list = [[x, os.path.getctime(x)] for x in dir_list]
            # Отсортируем список по дате создания в обратном порядке
            sort_date_list = sorted(date_list, key=lambda x: x[1], reverse=True)
            # Выведем первый элемент списка. Он и будет самым последним по дате
            print (sort_date_list[0][0])
            call_command('loaddata', sort_date_list[0][0]) 
        
        return Response()


