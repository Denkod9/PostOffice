from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.AddressGetView.as_view(), name='address'),
    path('<int:pk>/', views.AddressDetailsView.as_view(), name='address_details'),
    path('street/', views.StreetGetView.as_view(), name='street'),
    path('street/<int:pk>/', views.StreetDetailsView.as_view(), name='street_details'),
    path('post_office_info/', views.PostOfficeInfoGetView.as_view(), name='post_office_info'),
    path('post_office_info/<int:pk>/', views.PostOfficeInfoDetailsView.as_view(), name='post_office_info_details'),

    # Путь для чтения данных в таблицу для отображения всех данных с ID
    path('address/table/', views.AddressTableGetView.as_view(), name='address_table'),
    path('post_office_info/table/', views.PostOfficeInfoTableGetView.as_view(), name='poi_table'),
]

