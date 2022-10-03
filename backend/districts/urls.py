from django.urls import path
from . import views


urlpatterns = [
    path('', views.DistrictGetView.as_view(), name='district'),
    path('<int:pk>/', views.DistrictDetailsView.as_view(), name='district_details'),
    path('district_street/', views.DistrictStreetGetView.as_view(), name='district_street'),
    path('district_street/<int:pk>/', views.DistrictStreetDetailsView.as_view(), name='district_street_details'),

    # Путь для чтения данных в таблицу для отображения всех данных с ID
    path('district_table/', views.DistrictTableGetView.as_view(), name='district__table'),
    path('district_street_table/', views.DistrictStreetTableGetView.as_view(), name='district_street_table'),
]
