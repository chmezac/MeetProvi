from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'lugares', views.LugarViewSet)
router.register(r'tipo_lugares', views.Tipo_LugarViewSet)

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('usuario/login/', views.login, name='login'),
    path('usuario/registro/', views.registro, name='registro'),
    path('lugar/ver/', views.lugar_ver, name='lugar_ver'),
    path('lugar/solicitar/', views.lugar_solicitar, name='lugar_solicitar'),
    path('lugar/pendiente/', views.lugar_pendiente, name='lugar_pendiente'),
    path('lugar/editar/', views.lugar_editar, name='lugar_editar'),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('django.contrib.auth.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)