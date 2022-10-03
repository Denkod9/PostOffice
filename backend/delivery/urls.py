from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.DeliveryGetView.as_view(), name='delivery'),
    path('<int:pk>/', views.DeliveryDetailsView.as_view(), name='delivery_details'),

    # Путь для чтения данных в таблицу для отображения всех данных с ID
    path('table/', views.DeliveryGetTableView.as_view(), name='delivery_table'),
]
