var imagen;
$(document).ready(
    (function(){
        if (localStorage.getItem('lugar')){
            var xhttp = new XMLHttpRequest(); 
            var url = localStorage.getItem('lugar');  
            xhttp.onreadystatechange = function() {
                if( this.readyState == 4 && this.status == 200 ){
                    var data = JSON.parse(this.responseText);
                    if(!data.estado){
                        $('#estado').val('0')
                    }
                    $('#nombre').val(data.nombre);
                    $('#comuna').val(data.comuna);
                    $('#direccion').val(data.direccion);
                    $('#descripcion').val(data.descripcion);
                    $('#latitud').val(data.latitud);
                    $('#longitud').val(data.longitud);

                    var xhttp2 = new XMLHttpRequest(); 
                    var url2 = 'http://127.0.0.1:8000/api/tipo_lugares/';  
                    xhttp2.onreadystatechange = function() {
                        if( this.readyState == 4 && this.status == 200 ){
                            var data2 = JSON.parse(this.responseText);
                            for (i = 0; i < data2.count; i++) { 
                                $('#tipo_lugar').append(
                                    '<option value="'+data2.results[i].codigo+'">'+data2.results[i].nombre+'</option>'
                                )
                            }

                            $('#tipo_lugar').val(data.tipo_lugar)
                        }
                    }
                    xhttp2.open("GET", url2, true);
                    xhttp2.send();
                }
            }
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        else{
            console.log('AAAAAAAAAAAAAAA');
        }
    })(),
    $('#btnsubmit').click(function(){
        var estado, nombre, comuna, direccion, descripcion, latitud, longitud, imagen;
        if ($('#estado').val() == 1){
            if($('#longitud').val().length > 0 && $('#latitud').val().length > 0){
                estado = true;
            }
        }else{
            estado = false;
        }

        if($('#nombre').val().length > 0){
            nombre = $('#nombre').val()
        }else{
            alert('Ingrese un nombre');
            return;
        }
        if($('#comuna').val().length > 0){
            comuna = $('#comuna').val()
        }else{
            alert('Ingrese una comuna');
            return;
        }
        if($('#direccion').val().length > 0){
            direccion = $('#direccion').val()
        }else{
            alert('Ingrese una direccion');
            return;
        }
        if($('#descripcion').val().length > 0){
            descripcion = $('#descripcion').val()
        }else{
            alert('Ingrese una descripcion');
            return;
        }
        if($('#latitud').val().length > 0){
            latitud = $('#latitud').val()
        }else{
            alert('Ingrese una latitud');
            return;
        }
        if($('#longitud').val().length > 0){
            longitud = $('#longitud').val()
        }else{
            alert('Ingrese una longitud');
            return;
        }

        function editar(){
            var xhttp = new XMLHttpRequest();
            var url = localStorage.getItem('lugar');
            
            var data = {
                "estado":estado, 
                "nombre":nombre, 
                "comuna":comuna, 
                "direccion":direccion, 
                "descripcion":descripcion, 
                "latitud":latitud, 
                "longitud":longitud,
            };

            xhttp.onreadystatechange = function() {
                if( this.readyState == 4 && this.status == 200 ){
                    location.reload();
                }
            }

            xhttp.open("PATCH", url, true);
            xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhttp.send(JSON.stringify(data));
        }

        editar();
    }),
);