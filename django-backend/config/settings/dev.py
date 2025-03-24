from .base import *  # noqa
from .base import env


DEBUG = env("DJANGO_DEBUG", default=True)
SECRET_KEY = env(
    "DJANGO_SECRET_KEY",
    default="django-insecure-g4@&pugpim77h8s8cti8)@alvi*-ouc%0v7=1rm*jdfc(0f*",
)

ALLOWED_HOSTS = []

DJANGO_VITE = {
    "default": {
        "dev_mode": False,
    },
}

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
DEFAULT_FROM_EMAIL = env(
    "DJANGO_DEFAULT_FROM_EMAIL", default="olsaat <hello@olsaat.com>"
)
