from datetime import date

from django.db import models
from accounts.models import UserAccount


# Создане модели Postman
class Postman(models.Model):

    user = models.OneToOneField(
        UserAccount,
        verbose_name='Сотрудник',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    employment_date = models.DateField(verbose_name='Дата найма', default=date.today)
    topicality = models.BooleanField(verbose_name='Назначен район', default=False)

    class Meta:
        db_table = 'postman'
        verbose_name = 'Почтальон'
        verbose_name_plural = 'Почтальоны'

    # При доовлении почтальона выводится его email
    def __str__(self):
        return self.user.email



