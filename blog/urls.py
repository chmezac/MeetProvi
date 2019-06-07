from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('sitio/registro', views.sitio_registro, name='sitio_registro'),
]