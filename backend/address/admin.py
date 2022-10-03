from django.contrib import admin
from .models import Street, Address, PostOfficeInfo


class StreetAdmin(admin.ModelAdmin):
    list_display = ('id', 'type_street', 'street')
    list_display_links = ('id', 'type_street', 'street')
    search_fields = ('id', 'type_street', 'street')


class AddressAdmin(admin.ModelAdmin):
    # list_display = ('id', 'street', 'house', 'flat', 'district')
    list_display = ('id', 'street', 'house', 'flat')
    list_display_links = ('id', 'street', 'house', 'flat')
    search_fields = ('id', 'street', 'house', 'flat')


class PostOfficeInfoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'address', 'manager_info')
    list_display_links = ('id', 'title', 'address', 'manager_info')
    search_fields = ('id', 'title', 'address', 'manager_info')


admin.site.register(Street, StreetAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(PostOfficeInfo, PostOfficeInfoAdmin)



