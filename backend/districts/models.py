from django.db import models
from address.models import Street
from postman.models import Postman


# Создане модели DistrictStreet
class DistrictStreet(models.Model):
    postman = models.ForeignKey(
        Postman,
        verbose_name='Почтальон',
        on_delete=models.CASCADE
    )
    street = models.ForeignKey(
        Street,
        verbose_name='Улица',
        on_delete=models.CASCADE
    )

    # строковое представление по названию
    def __str__(self):
        return self.street.street

    class Meta:
        db_table = 'district_street'
        verbose_name = 'Улица участка'
        verbose_name_plural = 'Улицы участка'


# Создане модели District
class District(models.Model):
    number = models.IntegerField('Номер участка')
    title = models.CharField('Название участка', max_length=100)
    district_street = models.ForeignKey(
        'DistrictStreet',
        verbose_name='Улицы участка',
        on_delete=models.CASCADE
    )

    class Meta:
        db_table = 'district'
        verbose_name = 'Участок'
        verbose_name_plural = 'Участки'

    # строковое представление по названию
    def __str__(self):
        return self.title
