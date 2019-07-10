from rest_framework import serializers
from .models import *
from rest_framework import permissions


class LugarSerializer(serializers.HyperlinkedModelSerializer):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    tipo_lugar = serializers.IntegerField(source='tipo_lugar.codigo')
    class Meta:
        model = Lugar
        fields = ('codigo','nombre','descripcion','comuna','direccion','latitud','longitud','estado','imagen','tipo_lugar','url',)

class Tipo_LugarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tipo_Lugar
        fields = ('codigo','nombre','url',)