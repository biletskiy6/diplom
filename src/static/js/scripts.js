var preloader = (function () {
  var percentsTotal = 0,
  preloader = $('.preloader');

  var imgPath = $('*').map(function (ndx, element) {
    var background = $(element).css('background-image'),
    img = $(element).is('img'),
    path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }

    if (img) {
      path = $(element).attr('src');
    }

    if (path) return path

  });

  var setPercents = function (total, current) {
    var persents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(persents + '%');

    if (persents >= 100) {
      preloader.fadeOut();
    }
  }

  var loadImages = function (images) {

    if (!images.length) preloader.fadeOut();

    images.forEach(function (img, i, images) {
      var fakeImage = $('<img>', {
        attr: {
          src: img
        }
      });

      fakeImage.on('load error', function () {
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });
  }

  return {
    init: function () {
      var imgs = imgPath.toArray();
      loadImages(imgs);
    }
  }
}());

$(function(){
	svg4everybody();
  preloader.init();




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
    $("body").toggleClass("shadow");
  });

  $(".menu-toggle").on("click", function() {
    $(".main-navigation").toggleClass("main-navigation--active");
    $(this).toggleClass("menu-toggle--active");
    /*$(".main-menu").slideToggle(300, function() {
      if($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });*/
  });
  
  $(".main-menu li a").on("click", function() {
    /*$(".menu").removeClass("menu--active");
    $(".toggle-menu").removeClass("toggle-menu--active");
    $(".main-menu li a").removeClass("fadeInUp");
    $("body").removeClass("shadow");*/
  });

  $('ul.materials-tabs').on('click', 'li:not(.materials-active)', function() {
    $(this)
      .addClass('materials-active').siblings().removeClass('materials-active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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
  //swiperInit();
  slickInit();
  fontSizeToggle();
});


  function fontSizeToggle() {
    var letters = $(".letters li a");

    if(letters) {
      letters.on("click", function(e) {
        e.preventDefault();
        $(".letters li").removeClass("current-letter");
        $(this).parent().addClass("current-letter");
        if($(this).parent().hasClass("more-size")){
         $(".post-wrapper .post").addClass("post--size");
       } else {
         $(".post-wrapper .post").removeClass("post--size");
       }
     });
    }
  }


  function slickInit() {
    var slickTarget = $(".team-items");

    if(slickTarget) {
     $(slickTarget).slick({
      arrows: true,
      dots: true,
      fade: true,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      lazyLoadBuffer: 0,
      responsive: [
      {
        breakpoint: 993,
        settings: {
          fade: false,
        }
      },
      ]
    });
   }

 }



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


$(window).on('load', function() {
  var mapTarget = document.getElementById('google-container');
	var latitude = 46.971754,
	longitude = 32.015067,
	map_zoom = 14;
  if(mapTarget) {
	var marker_url = {
		url: 'static/img/content/map/marker.svg',
		scaledSize: new google.maps.Size(40, 40),
	};
  }
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

  if(mapTarget) {
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
}

  if(mapTarget) {
    var map = new google.maps.Map(mapTarget, map_options);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      visible: true,
      optimized: false,
      icon: marker_url
    });
  }
  
});

$(window).on('resize', function() {
    var win = $(this); //this = window
    if (win.width() >= 993) {
        $('.main-menu').removeAttr('style');
        $(".main-navigation").removeClass("main-navigation--active");
        $(".menu-toggle").removeClass("menu-toggle--active");
    }
});