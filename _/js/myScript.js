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
}
init();

});