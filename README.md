# Django-React-Authentication
open the setting file in microdomain and change the djoser google redirect link and facebook redirect link to your application
## front-end
```
cp .env.sample .env
npm install
npm run build
```

## login error modicication
copy given rest_framework_simplejwt folder in your environment folder

place these code in file (rest_framework_simplejwt.views.py) line#25 post function
## modify the email templates
move to the djoser libray and open template folder all the email templates are available there.

## backend
```
python manage.py migrate
python manage.py runserver

```


## server url
open link http://localhost:8000 to run the server 
