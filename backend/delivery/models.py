from django.db import models
from accounts.models import UserAccount
from editions.models import Edition


# Создане модели Delivery
class Delivery(models.Model):
    subscriber = models.ForeignKey(
        UserAccount,
        verbose_name='Подписчик',
        on_delete=models.CASCADE
    )
    edition = models.ForeignKey(
        Edition,
        verbose_name='Издание',
        on_delete=models.CASCADE
    )

    # Ожидается
    expected = models.BooleanField('Посылка ожидается', default=True)

    class Meta:
        db_table = 'delivery'
        verbose_name = 'Доставка'
        verbose_name_plural = 'Доставки'
