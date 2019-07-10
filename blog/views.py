from django.shortcuts import render
from .forms import *
from .serializers import *
from django.shortcuts import redirect

# Create your views here.
def inicio(request):
    return render(request, '../templates/index.html', {})

def login(request):
    return render(request, '../templates/registration/login.html', {})

def registro(request):
    if request.method == "POST":
        form = PersonaForm(request.POST)
        if form.is_valid():
            usuario = form.save(commit=False)
            usuario.is_active = True
            usuario.save()
            return redirect('login')
    else:
        form = PersonaForm()
    return render(request, '../templates/registration/registro.html', {'form': form})

def lugar_ver(request):
    return render(request, '../templates/lugares/ver.html', {})
    
def lugar_pendiente(request):
    return render(request, '../templates/lugares/pendiente.html', {})
    
def lugar_solicitar(request):
    if request.method == "POST":
        form = LugarForm(request.POST)
        if form.is_valid():
            lugar = form.save(commit=False)
            lugar.save()
            return redirect('inicio')
    else:
        form = LugarForm()

    return render(request, '../templates/lugares/solicitar.html', {'form': form})

def lugar_editar(request):
    return render(request, '../templates/lugares/editar.html', {})

#VISTAS PARA API
from rest_framework import viewsets


class LugarViewSet(viewsets.ModelViewSet):
    queryset = Lugar.objects.all()
    serializer_class = LugarSerializer

class Tipo_LugarViewSet(viewsets.ModelViewSet):
    queryset = Tipo_Lugar.objects.all()
    serializer_class = Tipo_LugarSerializer
