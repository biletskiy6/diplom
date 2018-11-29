$(function(){
	svg4everybody();
	//getVideVideo();

    var swiperWrapper = document.querySelector(".swiper-container .swiper-wrapper");
    var swiperPagination = document.querySelector(".swiper-pagination");
    var counter = 0;
    for(var i = 0; i < swiperWrapper.children.length; i++) {
        counter++;
        if(counter > 12) {
            swiperPagination.classList.add("swiper-pagination--hidden");
        }
    }

    $(".to-top").on("click", function(e) {
        e.preventDefault();
        $('html, body').stop(false,false).animate({
            scrollTop: 0
     }, 700);

    });
    $(".toggle-menu").on("click", function() {
      $(this).toggleClass("toggle-menu--active");
      $(".menu").toggleClass("menu--active");
      $(".main-menu li a").toggleClass("fadeInUp");
  });

    $(".team-items").slick({
      arrows: true,
      dots: true,
      fade: true,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      lazyLoadBuffer: 0,
  });
    $(".main-menu li a").on("click", function() {
      $(".menu").removeClass("menu--active");
      $(".toggle-menu").removeClass("toggle-menu--active");
      $(".main-menu li a").removeClass("fadeInUp");
  });

    $(".search a").on("click", function(e) {
      e.preventDefault();
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
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
});

var parallax = (function(){
	var sectAbout = document.querySelector(".s-about"); 
	var sectContacts = document.querySelector(".s-contacts")

	return {
		move: function(block, windowScroll, strafeAmount) {
			var strafe = windowScroll / -strafeAmount + "%";
			var transformString = 'translate3d(0,' + strafe + ', 0)';

			var style = block.style;

			style.transform = transformString;
			style.webkitTransform = transformString;
		},
		init: function(wScroll) {
			//this.move(sectAbout, wScroll, 30);
		}
	}

}());

window.onscroll = function() {
	wScroll = window.pageYOffset;
	parallax.init(wScroll);

}
$(window).on("scroll", function() {


	var wintop = $(window).scrollTop(),
   docHeight = $(document).height(),
   winHeight = $(window).height();

   var scrolled = (wintop / (docHeight - winHeight)) * 100;

   $(".scroll-line").css('width', scrolled + "%");

   if($(this).scrollTop() > 0){
      $(".top-line").addClass("top-line--fixed");
  } else {
      $(".top-line").removeClass("top-line--fixed");
  }

  if($(this).scrollTop() > 500) {
    $(".to-top").addClass("to-top--active");
} else {
    $(".to-top").removeClass("to-top--active");
}

});



$(window).on('load', function() {
	var latitude = 46.971754,
	longitude = 32.015067,
	map_zoom = 14;
	var marker_url = {
		url: 'static/img/content/map/marker.svg',
		scaledSize: new google.maps.Size(40, 40),
	};
	//var marker_url = 
	var main_color = '#5dbdfe',
	saturation_value = 0,
	brightness_value = 0;
	var style = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#193341"
        }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#2c5a71"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#29768a"
        },
        {
            "lightness": -37
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#406d80"
        }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#406d80"
        }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#3e606f"
        },
        {
            "weight": 2
        },
        {
            "gamma": 0.84
        }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#ffffff"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
        {
            "weight": 0.6
        },
        {
            "color": "#1a3541"
        }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#2c5a71"
        }
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