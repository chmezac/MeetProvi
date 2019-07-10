$(document).ready(
    function cargar(){
        var xhttp = new XMLHttpRequest();
        var url = 'http://127.0.0.1:8000/api/lugares/';
    
        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                var data = JSON.parse(this.responseText);
                for (i = 0; i < data.count; i++) { 
                    if (data.results[i].estado){
                        $('#info').append(
                            '<div class="col-sm-12 col-md-6 col-lg-3 card">'+
                                '<h5>'+data.results[i].nombre+'</h5>'+
                                '<img class="imginfo" src="'+data.results[i].imagen+'" alt="">'+
                                '<div>'+
                                    '<p><strong>Direccion: </strong><span>'+data.results[i].direccion+'</span></p>'+
                                '</div>'+
                                '<div>'+
                                '<p><strong>Comuna: </strong><span>'+data.results[i].comuna+'</span></p>'+
                                '</div>'+
                                '<div>'+
                                    '<label for="descripcion"><strong>Descripcion:</strong></label>'+
                                    '<p class="overflow-auto pinfo" style="max-height: 300px; min-height: 100px;">'+data.results[i].descripcion+'</p>'+
                                '</div>'+
                            '</div>'
                        );
                    }
                }
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
);