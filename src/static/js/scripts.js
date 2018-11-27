$(function(){
	svg4everybody();
	//getVideVideo();

	$(".toggle-menu").on("click", function() {
		$(this).toggleClass("toggle-menu--active");
		$(".menu").toggleClass("menu--active");
		$(".main-menu li a").toggleClass("fadeInUp");
	});

	$(".main-menu li a").on("click", function() {
		$(".menu").removeClass("menu--active");
		$(".toggle-menu").removeClass("toggle-menu--active");
		$(".main-menu li a").removeClass("fadeInUp");
	});

	$(".search a").on("click", function() {
		$(".search-overlay").fadeIn();
	});

	$(".search-overlay__close").on("click", function() {
		$(".search-overlay").fadeOut();
	});

	$(".language-switch li").on("click", function() {
		$(".language-switch li").removeClass("active");
		$(this).addClass("active");
	});

	var formInput = $("form.form-search input[type=text]");

	formInput.on("input", function() {
		if(this.value.trim()) {
			$(".form-search__find").fadeIn();
		} else {
			$(".form-search__find").fadeOut();
		}
	});

});

$(window).on("scroll", function() {
	if($(this).scrollTop() > 0){
		$(".top-line").addClass("top-line--fixed");
	} else {
		$(".top-line").removeClass("top-line--fixed");
	}
});

$(window).on('load', function() {
	var latitude = 46.971754,
	longitude = 32.015067,
	map_zoom = 15;
	var marker_url = {
		url: 'static/img/content/map/marker.svg',
		scaledSize: new google.maps.Size(50, 50),
	};
	//var marker_url = 
	var main_color = '#5dbdfe',
	saturation_value = -10,
	brightness_value = 0;
	var style = [{
		elementType: "labels",
		stylers: [
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi",
		elementType: "labels",
		stylers: [
		{ visibility: "off" }
		]
	},
	{
		featureType: 'road.highway',
		elementType: 'labels',
		stylers: [
		{ visibility: "off" }
		]
	},
	{

		featureType: "road.local",
		elementType: "labels.icon",
		stylers: [
		{ visibility: "off" }
		]
	},
	{
		featureType: "road.arterial",
		elementType: "labels.icon",
		stylers: [
		{ visibility: "off" },
		{ hue: main_color },
		]
	},
	{
		featureType: "road",
		elementType: "geometry.stroke",
		stylers: [
		{ visibility: "off" },
		{ hue: main_color },
		]
	},
	{
		featureType: "transit",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.government",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.sport_complex",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.attraction",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.business",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "transit",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "transit.station",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "landscape",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]

	},
	{
		featureType: "road",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
		{ hue: main_color },
		{ visibility: "on" },
		{ lightness: brightness_value },
		{ saturation: saturation_value }
		]
	}
	];

	var map_options = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: map_zoom,
		panControl: false,
		fullscreenControl: false,
		zoomControl: true,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style,
	}
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		optimized: false,
		icon: marker_url
	});
});


function getVideVideo() {
	var target = $('.main-header');
	target.vide({
		//mp4: "static/video/main-bg3.mp4",
		poster: "static/video/main-bg.jpg"
	}, {
		posterType: "jpg", 
		position: "0% 0%", 
	}, {
		bgColor: '#333'
	});
}