from django.db import models
from django.utils import timezone


class Lugar(models.Model):
    codigo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(max_length=1000)
    ubicación = models.CharField(max_length=1000)
    imagen = models.ImageField()
    usuario = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
