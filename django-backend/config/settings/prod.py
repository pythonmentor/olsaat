from .base import *  # noqa
from .base import env

DEBUG = env("DJANGO_DEBUG", default=False)
SECRET_KEY = env("DJANGO_SECRET_KEY")

ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS")

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = env("DJANGO_EMAIL_HOST")
EMAIL_PORT = env("DJANGO_EMAIL_PORT")
EMAIL_USE_TLS = env.bool("DJANGO_EMAIL_USE_TLS")
EMAIL_USE_SSL = env.bool("DJANGO_EMAIL_USE_SSL")
EMAIL_HOST_USER = env("DJANGO_EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("DJANGO_EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = env("DJANGO_DEFAULT_FROM_EMAIL")

# CORS settings
CORS_ALLOWED_ORIGINS = env.list("DJANGO_CORS_ALLOWED_ORIGINS")
