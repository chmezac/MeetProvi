from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import *

class LugarForm(forms.ModelForm):

    class Meta:
        model = Lugar
        fields = ('nombre', 'descripcion','comuna','direccion','latitud','longitud','tipo_lugar','imagen',)

class PersonaForm(UserCreationForm):

    class Meta:
        model = Persona
        fields = ('username','password1','password2','first_name','last_name','email','rut',)