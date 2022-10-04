from django.urls import path
from . import views


urlpatterns = [
    path('dumpdata/', views.DumbDataView.as_view(), name='admin_dumpdata'),
    path('loaddata/', views.LoadDataView.as_view(), name='admin_loaddata'),
]
