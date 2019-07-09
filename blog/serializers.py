from rest_framework import serializers
from .models import *


class LugarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lugar
        fields = ('nombre','descripcion','comuna','direccion','latitud','longitud','estado','imagen','url',)