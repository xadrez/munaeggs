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
	*Add click event to map. resulting in Marker
	*/
	
		google.maps.event.addListener(map, 'click', function(event) {
	 /*
	*latLng contains the maker's coodinate 
    */
		placeMarker(event.latLng);
		        
		$('.widget-body').empty();
					    
		var num = 0;
		 $.each(markers,function (key, val) {
			//Use the google geocoding services to get a formated address
				var key = 'AIzaSyBoOhXb6Gcmi26DMuhYrw9IM9tEFmZwOKk';
				var url ="https://maps.googleapis.com/maps/api/geocode/json?latlng="+val.position.k+","+val.position.D+"&key="+key+"";
					    	
//				console.log(url);
				$.getJSON(url, function (data) {
				num++;
				//Append formated address to the widget div.
					   $('.widget-body').append('<p class="addr">'+num+'. '+data.results[0].formatted_address+'&nbsp;&nbsp;<button id="btn">Remove</button></p>');
					    
					    });
			});
});					   
/*
*Place marker on the map and add it to the array that contain all markers
*Takes one argument coordinate
*/			
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
			  
			  /*
			  *Save the current list of address
			  */
			  			$('#save_list').on('click',function (e) {
			  				if (markers.length != 0) {
			  					saveList(e);
			  				}else{
			  				console.log('Nothing to save');
			  				}
			  				
			  			});
			  		  function saveList(event) {
			  		  	event.preventDefault();
			  		  	console.log('Saving in progress...');
			  		  }
			  
			  
	
}
init();

});