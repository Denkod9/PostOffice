from django.contrib import admin
from .models import Edition, EditionType, Subscription


class EditionTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'type_name')


class EditionAdmin(admin.ModelAdmin):
    # list_display = ('id', 'image', 'index', 'title', 'price', 'edition_type', 'is_subscription')
    list_display = ('id', 'image', 'index', 'title', 'price', 'edition_type', 'description')


class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'subscriber', 'edition', 'date_of_subscription', 'duration', 'is_subscription')


admin.site.register(EditionType, EditionTypeAdmin)
admin.site.register(Edition, EditionAdmin)
admin.site.register(Subscription, SubscriptionAdmin)

