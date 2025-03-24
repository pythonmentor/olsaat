"""
URL configuration for Olsaat project.
"""

from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.views.generic import TemplateView
from olsaat.products.api import api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]

if settings.DEBUG:
    from django.conf.urls.static import static

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
