jQuery( document ).ready( function($) {
 
    $( "#get-mylocation" ).load( function(e) {
        e.preventDefault();
 
        /* Chrome need SSL! */
        
        var is_chrome = /chrom(e|ium)/.test( navigator.userAgent.toLowerCase() );
        var is_ssl    = 'https:' == document.location.protocol;
        if( is_chrome && ! is_ssl ){
            return false;
        }
 
        /* HTML5 Geolocation */

        navigator.geolocation.getCurrentPosition(
            function( position ){ // success cb
 
                /* Current Coordinate */

                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var google_map_pos = new google.maps.LatLng( lat, lng );
 
        /* Use Geocoder to get address */

                var google_maps_geocoder = new google.maps.Geocoder();
                google_maps_geocoder.geocode(
                    { 'latLng': google_map_pos },
                    function( results, status ) {
                        if ( status == google.maps.GeocoderStatus.OK && results[0] ) {
                            console.log( results[0].formatted_address );
                        }
                    }
                );
            },
            function(){ // fail cb
            }
        );
    });
 
 
});