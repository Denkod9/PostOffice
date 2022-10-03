from django.urls import path

from . import views

urlpatterns = [
    path('', views.EditionView.as_view(), name='editions'),
    path('edition/<int:id>/', views.EditionDetailsView.as_view(), name='edition_details'),
    # path('edition/add/<str:image>/<str:index>/<str:title>/<int:price>/<int:edition_type>/<str:description>/',
    #     views.EditionAddView.as_view(),
    #     name='edition_add'
    # ),

    path('edition_subscriptions/', views.EditionSubscriptionsView.as_view(), name='edition_subscriptions'),

    path('edition_types/', views.EditionTypeView.as_view(), name='edition_types'),
    path('edition_types/<int:pk>', views.EditionTypeDetailsView.as_view(), name='edition_types_details'),

    # Добовление подписки вручную
    path('edition_subscription/', views.EditionSubscriptionView.as_view(), name='edition_subscription'),
    path('edition_subscription/<int:pk>/', views.EditionSubscriptionDetailsView.as_view(), name='edition_subscription_details'),

    # Путь для чтения данных в таблицу для отображения всех данных с ID
    path('subscription_table/', views.SubscriptionTableView.as_view(), name='subscription_table'),


    path('edition_types/<str:type_name>/', views.EditionTypeAddView.as_view(), name='edition_types_add'),
    path('edition_types/delete/<int:id>/', views.EditionTypeDeleteView.as_view(), name='edition_types_delete'),

    path('subscription/<int:subscriberPk>/<int:editionPk>/', views.SubscribePersonView.as_view(), name='edition_subscription'),
    path('un_subscription/<int:id>/', views.UnSubscribePersonView.as_view(), name='edition_unsubscription'),


    path('current_editions/<int:num1>/<int:num2>/', views.CurrentEditionsView.as_view(), name='current_editions'),


    path('subscriptions/profile/<int:pk>/', views.SubscriptionsProfileView.as_view(), name='subscriptions_profile'),
    path('unsubscriptions/profile/<int:pk>/', views.UnSubscriptionsProfileView.as_view(), name='unsubscriptions_profile'),

    # region Отчеты
    path('count_editions/', views.CountAllEditionsView.as_view(), name='count_editions'),
    path('count_subscriptions/', views.CountSubscriptionOnEditionsView.as_view(), name='count_subscriptions'),

    # region Издания по возростанию цены
    path('count_editions/price100_1000/', views.CountPriceEditions_100_1000.as_view(), name='count_price_100_1000'),
    path('count_editions/price1000_3000/', views.CountPriceEditions_1000_3000.as_view(), name='count_price_1000_3000'),
    path('count_editions/price3000_5000/', views.CountPriceEditions_3000_5000.as_view(), name='count_price_3000_5000'),
    path('count_editions/price5000_10000/', views.CountPriceEditions_5000_10000.as_view(), name='count_price_5000_10000'),
    # endregion

    # region Издания по жанрам
    path('count_edition_types/type_magazine/', views.CountEditionTypeMagazine.as_view(), name='count_edition_type_magazine'),
    path('count_edition_types/type_newspaper/', views.CountEditionTypeNewspaper.as_view(), name='count_edition_type_newspaper'),
    path('count_edition_types/type_book/', views.CountEditionTypeBook.as_view(), name='count_edition_type_book'),
    path('count_edition_types/type_almanac/', views.CountEditionTypeAlmanac.as_view(), name='count_edition_type_almanac'),
    path('count_edition_types/type_collection/', views.CountEditionTypeCollection.as_view(), name='count_edition_type_collection'),
    path('count_edition_types/type_yearbook/', views.CountEditionTypeYearbook.as_view(), name='count_edition_type_yearbook'),
    path('count_edition_types/type_directory/', views.CountEditionTypeDirectory.as_view(), name='count_edition_type_directory'),
    # endregion

    # region Подписки по годам
    path('count_subscriptions/all_years/', views.CountSubscriptionAllYearsView.as_view(), name='all_years_subscriptions'),
    path('count_subscriptions/current_year/', views.CountSubscriptionCurrentYearView.as_view(), name='current_year_subscriptions'),
    path('count_subscriptions/last_year/', views.CountSubscriptionLastYearView.as_view(), name='last_year_subscriptions'),
    path('count_subscriptions/2020_year/', views.CountSubscription2020YearView.as_view(), name='2020_year_subscriptions'),
    path('count_subscriptions/2019_year/', views.CountSubscription2019YearView.as_view(), name='2019_year_subscriptions'),
    path('count_subscriptions/2018_year/', views.CountSubscription2018YearView.as_view(), name='2018_year_subscriptions'),
    path('count_subscriptions/2017_year/', views.CountSubscription2017YearView.as_view(), name='2017_year_subscriptions'),
    # endregion

    # endregion

]

