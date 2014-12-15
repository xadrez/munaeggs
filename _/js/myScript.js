$(document).ready(function () {
//console.log('initiated');
var init = function () {
	var mapDiv = document.getElementById('map');
	/*
	*create a variable that stores the default position coordinates
	*/
	var position = new google.maps.LatLng(60.221920, 	24.805534);
	
	/*
	*Default options
	*/
	var options = {
	  'center': position,
	  'zoom': 14,
	  'mapTypeId': google.maps.MapTypeId.ROADMAP
	};
	
	/*
	* map is the new instance with the default values
	*/
	var markers =[];
	var map = new google.maps.Map(mapDiv, options);
	var marker = new google.maps.Marker({position:position,map:map,title:'Not draggable'});
	
	/*
	*Add event to map. Marker
	*/
	
			  google.maps.event.addListener(map, 'click', function(event) {
			    placeMarker(event.latLng);
//		        console.log(event.latLng);
			    var key = 'AIzaSyBoOhXb6Gcmi26DMuhYrw9IM9tEFmZwOKk';
			    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+event.latLng.k+","+event.latLng.D+"&key="+key+"";
			    $.getJSON(url, function (data) {
//			    console.log(url);
			    	$('.widget-body').append('<p>'+data.results[0].formatted_address+'&nbsp;&nbsp;<a href="#">Remove</a></p>');
			    
			    });
			   // console.log(markers);

			  });
			
			function placeMarker(location) {
			  var marker = new google.maps.Marker({
			      position: location,
			      map: map,
			      clickable:true,
			      draggable:true
			  });
			  	markers.push(marker);
			  }
			 
			  	  google.maps.event.addListener(marker, 'dragend', function(event) {
			  	alert('Drag endded');
			  });//end of marker listener draend
			  
	
}
init();

});