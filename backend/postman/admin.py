from django.contrib import admin
from .models import Postman


class PostmanAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'employment_date', 'topicality')
    list_display_links = ('id', 'user', 'employment_date', 'topicality')
    search_fields = ('id', 'user', 'employment_date', 'topicality')


admin.site.register(Postman, PostmanAdmin)





