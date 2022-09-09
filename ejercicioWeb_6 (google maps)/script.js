'use strict'

var map, infoWindow;
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 19.497311, lng:-99.252190 },
        zoom: 7, 
    });

      // Agregar un marcador
      var map = new google.maps.Marker({
        position:{lat: 19.497311, lng:-99.252190},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });


    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
            };

        infoWindow.setPosition(pos);
        infoWindow.setContent('AQUI ESTAS PAPI');
        infoWindow.open(map);
        map.setCenter(pos);
        }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
