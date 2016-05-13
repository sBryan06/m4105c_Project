/**
 * Created by sbryan06 on 13/05/2016!
 */
function erreurPosition(error) {
    var info = "Erreur lors de la géolocalisation : ";
    switch(error.code) {
    case error.TIMEOUT:
    	info += "Timeout !";
    break;
    case error.PERMISSION_DENIED:
    info += "Vous n’avez pas donné la permission";
    break;
    case error.POSITION_UNAVAILABLE:
    	info += "La position n’a pu être déterminée";
    break;
    case error.UNKNOWN_ERROR:
    	info += "Erreur inconnue";
    break;
    }
document.getElementById("localisation").innerHTML = info;
}

function maPosition(position) {
  var infopos = "Position déterminée :\n";
  infopos += "Latitude : "+position.coords.latitude +"\n";
  var latze = position.coords.latitude;
  var longze = position.coords.longitude;
  infopos += "Longitude: "+position.coords.longitude+"\n";
  document.getElementById("infoposition").innerHTML = infopos;
  
  var myLatLng = {lat: latze, lng: longze};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
  
  
}

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(maPosition, erreurPosition,{enableHighAccuracy:true});
 }