from django.contrib import admin
from .models import Delivery


class DeliveryAdmin(admin.ModelAdmin):
    list_display = ('id', 'subscriber', 'edition', 'expected')
    list_display_links = ('id', 'subscriber', 'edition', 'expected')
    search_fields = ('id', 'subscriber', 'edition', 'expected')


admin.site.register(Delivery, DeliveryAdmin)



