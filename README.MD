# Proyecto para pruebas

Para instalar el proyecto debes seguir las siguientes instrucciones en la terminar

```sh
git clone
cd itrio
crear archivo itrioapp/itrioapp/bd.py
CONFIGURACIONBD = {
        'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'ENGINE': 'django_tenants.postgresql_backend',
        'NAME': 'bd',
        'USER': 'user',
        'PASSWORD': 'clave',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
python3 -m venv venv
source venv/bin/activate
pip3 install -r requerimientos.txt
cd itrioapp
python3 manage.py runserver
# Migrar la base de datos -> Debe estar creada
python3 manage.py migrate
```