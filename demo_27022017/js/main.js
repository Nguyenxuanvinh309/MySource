$(document).ready(function() {
      ScrollspyPage();
      myMap();
});

function ScrollspyPage(){
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});   

	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a, footer a[href='#myPage'], .navbar-brand").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
		        scrollTop: $(hash).offset().top
		      }, 900, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        window.location.hash = hash;
	      });
	    } // End if
	});
}

function myMap() {
	var mapProp= {
	    center:new google.maps.LatLng(51.508742,-0.120850),
	    zoom:5,
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function Tooltip(){
	// Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
}