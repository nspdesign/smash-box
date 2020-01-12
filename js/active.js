/*==================================
Template Name: Prolan 
Description: Prolan is a Multipurpose Business Template.
Version: 1.0
====================================*/    
(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/*==============================
			Mobile Nav
		================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			label: 'Menu',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
	 
		/*====================================
			Slider & Carousel
		======================================*/ 
		if ($.fn.slick) {
			$(".home-slider").slick({
				autoplay:true ,
				speed: 600,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				pauseOnHover: true,
				dots: false,
				arrows:true,
				cssEase: 'linear',
                animateIn: 'fadeIn',
                animateOut: 'fadeOutLeft',
				draggable: true,
				prevArrow: '<button class="PrevArrow fa fa-angle-left"></button>',
				nextArrow: '<button class="NextArrow fa fa-angle-right"></button>',
				responsive: [{
						breakpoint: 700,
						settings: {
							arrows:false
						}
					},
				]
			});
		};
	 
		/*====================================
			Isotop And Masonry Active
		======================================*/ 
		$('.isotop-active').masonry({
                // options
                itemSelector: '.grid-item',
            });
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.project-nav li').on('click', function() {
                    $(".project-nav li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false,
                        }
                    });
                    return false;
            });
        }
	
		/*====================================
			Testimonial Slider
		======================================*/ 
		$('.testimonial-active').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 600,
			arrows: false,
			dots: true,
			slidesToScroll: 1,
			slidesToShow: 3,
			pauseOnHover: true,
			draggable: true,
			cssEase: 'linear',
			responsive: [
				{
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
						dots: false,
                    }
                },{
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
						dots: false,
                    }
                },
            ]
		});
		
		/*====================================
			Counter Js
		======================================*/ 
		$('.count').counterUp({
			time: 1000
		});
		
		/*====================================
			News Slider
		======================================*/ 
		$('.newsblog-slider').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 600,
			arrows: false,
			dots: true,
			slidesToScroll: 1,
			slidesToShow: 3,
			pauseOnHover: false,
			draggable: true,
			responsive: [{
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
		});
		
		
		/*====================================
			Brand Carousel
		======================================*/ 
		$('.brand-slider').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 600,
			arrows: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			pauseOnHover: false,
			dots: false,
			draggable: true,
			cssEase: 'linear',
			responsive: [{
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
		});

		
		/*======================================
			Wow JS
		======================================*/ 		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*======================================
			Parallax JS
		======================================*/ 
		$(window).stellar({
            responsive: true,
            positionProperty: 'position',
			horizontalOffset: 0,
			verticalOffset: 0,
            horizontalScrolling: false
        });
		
		/*=====================================
			Video Popup
		======================================*/ 
		$('.video-play').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	
		/*====================================
			Scrool Up
		======================================*/ 	
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-long-arrow-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
		
	});	
		/*====================================
			Extra JS
		======================================*/ 
		$('.a').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 70
				}, 1000);
			e.preventDefault();
		});
		
		
		/*====================================
			Preloader JS
		======================================*/
		$(window).load(function(){
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
		
		
})(jQuery);