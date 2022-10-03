from django.contrib import admin
from .models import UserAccount


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'first_name', 'last_name', 'date_of_birth', 'role', 'phone', 'address', 'is_staff', 'is_superuser', 'is_active')
    # list_display = ('id', 'email', 'is_staff', 'is_superuser', 'is_active')
    # list_display_links = ('id', 'email')
    list_display_links = ('id', 'email', 'role')
    search_fields = ('id', 'email', 'role')
    # search_fields = ('id', 'email')


admin.site.register(UserAccount, UserAccountAdmin)


