# Test Post_Office
Проект для Post Office 
Подробное описание проекта в [Техническое задание на разработку](https://github.com/Denkod9/test_postoffice/blob/master/Docs/technical_requirements.md "ТЗ на разработку")



# Запуск
создать базу данных в MySQL <b>post_office</b>(можно изменить в settings.py)


#### Папка backend frontend
<b> npm i </b>          --- для установки зависимостей
<br/>
<b> npm run build </b>   --- для создания билда в backend (должна скопироваться автоматически)

#### Папка backend
<b> py -m venv venv </b>  --- для установки виртуального окружения
<br/>
<b> pip install -r requirements.txt </b> --- для установки нужных библиотек для работы
<br/>
<b> pip install --upgrade social-auth-app-django djangorestframework-simplejwt </b> --- из-за сбоя библиотек надо вручную обновить несколько библиотек 
<br/>
<b> py manage.py migrate </b>   --- сделать миграции в БД

## Важно
Если при запуске появилась ошибка с <b>venv</b>(виртуальным окружением) с <b>force_text</b> надо перейти в нужный файл и изменить на <b>force_str</b>

