from django import forms

from .models import Lugar

class PostForm(forms.ModelForm):

    class Meta:
        model = Lugar
        fields = ('nombre', 'descripcion', 'ubicacion', 'imagen',)