# Django-React-Authentication
## First Time Setup
open the setting file in microdomain and change the djoser google redirect link and facebook redirect link to your application
## front-end
```
cp .env.sample .env

```
## install backend dependencies
```

virtualenv env
pip install -r requirements.txt
```

## login error modicication
copy given replace_library -> rest_framework_simplejwt folder in your environment folder

place these code in file (rest_framework_simplejwt.views.py) line#25 post function
## modify the email templates
move to the djoser libray and open template folder all the email templates are available there.

## backend
```
pyhton manage.py makemigrations account user_app admin_app
python manage.py migrate

```

## Run Docker

```
docker-compose up

```


