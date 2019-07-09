$(document).ready(
    (function(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibGlpdmUyd28iLCJhIjoiY2p4dmNzYzVjMDNsbTNtbzhibzJrOHNoOCJ9.FQrkLdm3nToP7pFYoTViWQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10', 
            center: [-70.611341, -33.4288379], 
            zoom: 13
        });

        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        map.addControl(new mapboxgl.NavigationControl());

        function carga(){
            var xhttp = new XMLHttpRequest();
            var url = 'http://127.0.0.1:8000/api/lugares/';
        
            xhttp.onreadystatechange = function() {
                if( this.readyState == 4 && this.status == 200 ){
                    var data = JSON.parse(this.responseText);
                    for (i = 0; i < data.count; i++) { 
                        if (data.results[i].estado){

                            var popup = new mapboxgl.Popup({ offset: 25 })
                            .setHTML('<h5>'+data.results[i].nombre+'</h5>');


                            let element = document.createElement('div')
                            element.className = 'marker'                            
                            let marker = new mapboxgl.Marker(element)
                            .setLngLat({
                                lng: data.results[i].longitud,
                                lat: data.results[i].latitud
                            })
                            .setPopup(popup)
                            .addTo(map);
                        }
                    }
                }
            }
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        
        carga();

    })()
);