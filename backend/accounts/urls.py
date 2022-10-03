from django.urls import path, include
from . import views

from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter


# router = DefaultRouter()
# router.register('address', views.AddressAdd, basename='address')
# router.register('users', views.UserViewSet, basename='users')

urlpatterns = [
    path('get_users/',
         views.GetUsersView.as_view(),
         name='get_users'
    ),
    path('create/',
         views.SubscriberAddView.as_view(),
         name='create_user'
    ),
    path('delete/<int:pk>/',
         views.SubscriberEditDeleteView.as_view(),
         name='delete_user'
    ),

    # Путь для чтения данных в таблицу для отображения всех данных с ID
    path('get_users_table/',
         views.GetUsersTableView.as_view(),
         name='get_users_table'
         ),

    # ссылка для редактирования профиля
    path('get_profile/<int:pk>/',
         views.ProfileGetSubscriberView.as_view(),
         name='profile'
    ),

    # region Отчеты
    path('count_subscribers/',
         views.CountSubscribersGet.as_view(),
         name='count_subscribers'
    ),
    path('count_subscribers/on_edition/',
         views.CountSubscribersOnEdition.as_view(),
         name='count_subscribers_on_edition'
    ),

    # region Подписчики по возростам
    path('count_subscribers/olds30_40/',
         views.CountSubscribersOlds30_40Get.as_view(),
         name='count_olds_30_40'
    ),
    path('count_subscribers/olds20_30/',
         views.CountSubscribersOlds20_30Get.as_view(),
         name='count_olds_20_30'
    ),
    path('count_subscribers/olds17_20/',
         views.CountSubscribersOlds17_20Get.as_view(),
         name='count_olds_17_20'
    ),
    # endregion

    # endregion
]

