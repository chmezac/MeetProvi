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
                                    '<option value="'+data2.results[i].url+'">'+data2.results[i].nombre+'</option>'
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
        var estadotxt, nombretxt, comunatxt, direcciontxt, descripciontxt, latitudtxt, longitudtxt, tipo_lugartxt;
        var error = []
        var correcto = ['tipo_lugar']
        if ($('#estado').val() == 1){
            if($('#longitud').val().length > 0 && $('#latitud').val().length > 0){
                estado = true;
            }
        }else{
            estadotxt = false;
        }

        if($('#nombre').val().length > 0){
            nombretxt = $('#nombre').val()
            correcto.push('nombre')
        }else{
            error.push('nombre')
        }

        tipo_lugartxt = $('#tipo_lugar').val()

        if($('#comuna').val().length > 0){
            comunatxt = $('#comuna').val()
            correcto.push('comuna')
        }else{
            error.push('comuna')
        }
        if($('#direccion').val().length > 0){
            direcciontxt = $('#direccion').val()
            correcto.push('direccion')
        }else{
            error.push('direccion')
        }
        if($('#descripcion').val().length > 0){
            descripciontxt = $('#descripcion').val()
            correcto.push('descripcion')
        }else{
            error.push('descripcion')
        }
        if($('#latitud').val().length > 0){
            latitudtxt = $('#latitud').val()
            correcto.push('latitud')
        }else{
            error.push('latitud')
        }
        if($('#longitud').val().length > 0){
            longitudtxt = $('#longitud').val()
            correcto.push('longitud')
        }else{
            error.push('longitud')
        }


        function editar(){
            var csrftoken = Cookies.get('csrftoken');

            axios({
                method: 'PATCH',
                url: localStorage.getItem('lugar'),
                data: {
                    estado: estadotxt,
                    nombre: nombretxt,
                    comuna: comunatxt,
                    direccion: direcciontxt,
                    descripcion: descripciontxt,
                    latitud: latitudtxt,
                    longitud: longitudtxt,
                    tipo_lugar: tipo_lugartxt
                },
                headers: {"X-CSRFToken": csrftoken}
            })
            .then(function (response) {
                swal("Correcto !", "Has editado correctamente el sitio","success")
                .then((value) => {
                    swal("Recuerda", "Debes ingresar la imagen desde el Panel de Administracion", "info")
                    .then((value) => {
                        window.location.replace("../pendiente/");
                    });
                })
            });

        }

        if (error.length == 0){
            editar();
        }else{
            for (i = 0; i < error.length; i++) {
                $('#'+error[i]).addClass('border border-danger');
                $('#'+correcto[i]).removeClass('border border-success');
            }
            for (i = 0; i < correcto.length; i++) {
                $('#'+correcto[i]).addClass('border border-success');
                $('#'+error[i]).removeClass('border border-danger');
            }
            swal("Algo salió mal !", "Tienes error en los siguientes campos: "+error, "error");
        }
    }),
);