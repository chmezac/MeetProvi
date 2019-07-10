$(document).ready(
    (function(){
        $('#id_tipo_lugar').addClass('form-control');
    })(),
    $('#btnsubmit').click(function(){
        var form = $('#form')
        var error = []
        var correcto = ['id_tipo_lugar']

        if($('#nombre').val().length > 0){
            correcto.push('nombre')
        }else{
            error.push('nombre')
        }

        if($('#comuna').val().length > 0){
            correcto.push('comuna')
        }else{
            error.push('comuna')
        }
        if($('#direccion').val().length > 0){
            correcto.push('direccion')
        }else{
            error.push('direccion')
        }
        if($('#descripcion').val().length > 0){
            correcto.push('descripcion')
        }else{
            error.push('descripcion')
        }

        if( $('#latitud').val().length != 0 || $('#longitud').val().length != 0 ){
            if( $('#latitud').val().length > 0 ){
                correcto.push('latitud')
            }else{
                error.push('latitud')
            }
            if( $('#longitud').val().length > 0 ){
                correcto.push('longitud')
            }else{
                error.push('longitud')
            }
        }else{
            correcto.push('latitud')
            correcto.push('longitud')
        }

        if ( error.length == 0 ){
            form.submit();
        }else{
            for (i = 0; i < error.length; i++) {
                $('#'+error[i]).addClass('border border-danger');
                $('#'+error[i]).removeClass('border border-success');
            }
            for (i = 0; i < correcto.length; i++) {
                $('#'+correcto[i]).removeClass('border border-danger');
                $('#'+correcto[i]).addClass('border border-success');
            }
            swal("Algo salió mal !", "Tienes error en los siguientes campos: "+error, "error");
        }
    })
);