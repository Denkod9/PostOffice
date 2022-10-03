from datetime import date
from enum import unique

from django.db import models
from django.urls import reverse

from django.utils.translation import gettext_lazy as _

from accounts.models import UserAccount


def upload_to(instance, filename):
    return f'upload/{instance.index}_{filename}'.format(filename=filename)


# Создане модели EditionType
class EditionType(models.Model):
    type_name = models.CharField('Тип издания', max_length=45)

    class Meta:
        db_table = 'edition_type'
        unique_together = ['type_name']
        verbose_name = 'Тип издания'
        verbose_name_plural = 'Типы изданий'

    # строковое представление по названию
    def __str__(self):
        return self.type_name

    def get_absolute_url(self):
        return reverse('edition_type-detail', args=[str(self.id)])


# Создане модели Edition
class Edition(models.Model):
    image = models.ImageField(_('Обложка'), upload_to=upload_to, default='default.png')
    index = models.CharField('Индекс', max_length=100, unique=True, null=True, blank=True)
    title = models.CharField('Название', max_length=100, null=True, blank=True)
    price = models.FloatField('Цена', max_length=10, null=True, blank=True)
    edition_type = models.ForeignKey('EditionType', verbose_name='Тип издания', on_delete=models.CASCADE)
    description = models.TextField('Описание')

    class Meta:
        db_table = 'edition'
        verbose_name = 'Издание'
        verbose_name_plural = 'Издания'

        # строковое представление по названию
    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('edition-detail', args=[str(self.id)])


# Создане модели IsSubscription
class Subscription(models.Model):
    subscriber = models.ForeignKey(
        UserAccount,
        verbose_name='Подписчик',
        related_name='user',
        on_delete=models.CASCADE
    )

    edition = models.ForeignKey(
        'Edition',
        verbose_name='Издание',
        related_name='editions',
        on_delete=models.CASCADE
    )
    date_of_subscription = models.DateField('Дата начала подписки', default=date.today)
    duration = models.IntegerField('Продолжительность', default=1)

    is_subscription = models.BooleanField('Подписка', default=True)

    class Meta:
        unique_together = ['subscriber', 'edition']
        db_table = 'subscription'
        verbose_name = 'Подписку'
        verbose_name_plural = 'Подписки'



