var avtryck = {
	initMaps : function() {
	    var latlng = new google.maps.LatLng( - 34.397, 150.644);
	    var myOptions = {
	        zoom: 8,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	},
};

function initialize() {
}
$(document).ready(function(){
	avtryck.initMaps();
});
