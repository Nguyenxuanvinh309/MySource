$( document ).ready(function() {
    myMap("googleMap", 10.783793,106.6815963);
    myMap("googleMap1", 10.783793,106.6815963);
});


function myMap(mapname, xpoistion, yposition) {
  var mapCanvas = document.getElementById(mapname);
  var myCenter = new google.maps.LatLng(xpoistion, yposition); 
  var mapOptions = {center: myCenter, zoom: 17};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}