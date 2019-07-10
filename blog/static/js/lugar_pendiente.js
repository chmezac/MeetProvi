$(document).ready(
    function cargar(){
        var xhttp = new XMLHttpRequest();
        var url = 'http://127.0.0.1:8000/api/lugares/';
    
        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                var data = JSON.parse(this.responseText);
                for (i = 0; i < data.count; i++) { 
                    if (!data.results[i].estado){
                        $('#tableinfo').append(
                            '<tr>'+
                                '<th scope="row">'+(i+1)+'</th>'+
                                '<td><a id="nombrelink" lugar="'+data.results[i].url+'" href="../editar/">'+data.results[i].nombre+'</a></td>'+
                                '<td>'+data.results[i].direccion+'</td>'+
                                '<td>'+data.results[i].comuna+'</td>'+
                            '</tr>'
                        );

                        $('#nombrelink').click(function(){
                            localStorage.setItem('lugar',this.getAttribute( "lugar" ))
                        })
                    }
                }
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    },
);