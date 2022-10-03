from django.contrib import admin
from .models import District, DistrictStreet


class DistrictStreetAdmin(admin.ModelAdmin):
    list_display = ('id', 'postman', 'street')
    list_display_links = ('id', 'postman', 'street')
    search_fields = ('id', 'postman', 'street')


class DistrictAdmin(admin.ModelAdmin):
    list_display = ('id', 'number', 'title', 'district_street')
    list_display_links = ('id', 'number', 'title', 'district_street')
    search_fields = ('id', 'number', 'title', 'district_street')


admin.site.register(District, DistrictAdmin)
admin.site.register(DistrictStreet, DistrictStreetAdmin)

