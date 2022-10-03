from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.PostmanGetView.as_view(), name='postman'),
    path('<int:pk>/', views.PostmanDetailsView.as_view(), name='postman_details'),
    path(
        'add_postman/<int:postmanId>/<str:employment_date>/<int:topicality>/',
        views.AddPostmanView.as_view(),
        name='add_postman'
    ),

    # Отчеты
    path('count_postmans/', views.CountPostmansView.as_view(), name='count_postmans'),
    path('districts_postman/', views.CountDistrictsPostmanView.as_view(),
         name='districts_postman'),
]
