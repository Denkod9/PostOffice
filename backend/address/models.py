from django.db import models
# from districts.models import District


# Создане модели Street
class Street(models.Model):
    type_street = models.CharField('Тип улицы', max_length=20, null=True, blank=True)
    street = models.CharField('Улица', max_length=100, null=True, blank=True)

    class Meta:
        db_table = 'street'
        verbose_name = 'Улицу'
        verbose_name_plural = 'Улицы'

    # строковое представление по названию
    def __str__(self):
        return self.type_street + ' ' + self.street


# Создане модели Address
class Address(models.Model):
    street = models.ForeignKey(
        'Street',
        verbose_name='Улица',
        on_delete=models.CASCADE
    )
    house = models.CharField('Дом', max_length=10)
    flat = models.CharField('Квартира', max_length=10)
    # district = models.ForeignKey(
    #     District,
    #     verbose_name='Участок',
    #     on_delete=models.CASCADE
    # )

    class Meta:
        db_table = 'address'
        verbose_name = 'Адрес'
        verbose_name_plural = 'Адреса'

    # строковое представление по названию
    def __str__(self):
        return self.street.street + ', дом ' + self.house + ', кв. ' + self.flat
        # return self.id


# Создане модели PostOfficeInfo
class PostOfficeInfo(models.Model):
    title = models.CharField('Название компании', max_length=100)
    address = models.ForeignKey(
        'Address',
        verbose_name='Адрес компании',
        on_delete=models.CASCADE
    )
    manager_info = models.CharField('О упровляющем', max_length=200)

    class Meta:
        db_table = 'post_office_info'
        verbose_name = 'О почтовом отделении'
        verbose_name_plural = 'О почтовых отделениях'

    # строковое представление по названию
    def __str__(self):
        return self.title
