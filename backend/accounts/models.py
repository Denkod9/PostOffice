from datetime import date

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from phonenumber_field.modelfields import PhoneNumberField
from address.models import Address


# Роли для пользователей
class Role(models.TextChoices):
    GUEST = "GUEST", 'Гость'
    SUBSCRIBER = "SUBSCRIBER", 'Подписчик'
    POSTMAN = "POSTMAN", 'Почтальон'
    OPERATOR = "OPERATOR", 'Оператор'
    MANAGER = "MANAGER", 'Заведующий'
    ADMIN = "ADMIN", 'Админ'


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Вы должны указать email адрес')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class UserAccount(AbstractBaseUser, PermissionsMixin):
    base_role = Role.SUBSCRIBER

    email = models.EmailField('Email', max_length=255, unique=True)
    first_name = models.CharField('Имя', max_length=255)
    last_name = models.CharField('Фамилия', max_length=255)
    date_of_birth = models.DateField('Дата рождения', default=date.today)
    role = models.CharField('Роль', max_length=50, choices=Role.choices, default=base_role)
    phone = PhoneNumberField(unique=True, null=True, blank=True)
    address = models.ForeignKey(
        Address,
        verbose_name='Адрес',
        on_delete=models.CASCADE,
        default='51',
        null=True,
        blank=True
    )

    # typeStreet = models.CharField('Тип улицы', max_length=20, null=True, blank=True)
    # street = models.CharField('Улица', max_length=100, null=True, blank=True)
    # house = models.CharField('Дом', max_length=10, null=True, blank=True)
    # flat = models.CharField('Квартира', max_length=10, null=True, blank=True)

    is_active = models.BooleanField('Подленность', default=True)
    is_staff = models.BooleanField('Сотрудник', default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'date_of_birth', 'role', 'phone', 'address', 'is_active', 'is_staff']
    # REQUIRED_FIELDS = ['first_name', 'last_name', 'role', 'phone', 'address']
    # REQUIRED_FIELDS = ['first_name', 'last_name', 'role',
    #                    'phone', 'typeStreet', 'street', 'house', 'flat']

    # def save(self, *args, **kwargs):
    #     if not self.pk:
    #         self.role = self.base_role
    #     return super().save(*args, **kwargs)

    class Meta:
        db_table = 'user_accounts'
        # ordering = ['-id']
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email
