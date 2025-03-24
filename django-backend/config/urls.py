"""
URL configuration for Olsaat project.
"""

from django.contrib import admin
from django.urls import path
from django.conf import settings
from olsaat.products.api import api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]

if settings.DEBUG:
    from django.conf.urls.static import static

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
