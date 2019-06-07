from django.shortcuts import render

def inicio(request):
    return render(request, 'inicio.html', {})

def sitio_registro(request):
    return render(request, 'sitio/registro.html', {})
