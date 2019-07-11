localStorage.removeItem('lugar');
$(document).ready(
    (function(){
        $('#id_tipo_lugar').addClass('form-control');
    })(),
    $('#btnsubmit').click(function(){
        function validarUrl(str) {
            var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
              '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return !!pattern.test(str);
        }

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

        if($('#imagen').val().length > 0){
            if(validarUrl($('#imagen').val())){
                correcto.push('imagen')
            }else{
                error.push('imagen')
            }
        }else{
            correcto.push('imagen')
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