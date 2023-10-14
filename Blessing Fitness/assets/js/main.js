"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
//--------------menu------------------------//

const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
let isHidden = true;
document.getElementById("mobile-menu").style.display= "none";


menuIcon.addEventListener('click', () => {
    if (isHidden) {
        document.getElementById("mobile-menu").style.display= "block";
    } else {
        document.getElementById("mobile-menu").style.display= "none";
    }
    isHidden = !isHidden; // Toggle the state
    mobileMenu.classList.toggle('show');

});

//Starts the slideshow for home page
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

    /*---------------------------------------------*
     * Portfolio  Masonry
     ---------------------------------------------*/

//    $('.portfolio').masonry({
//        itemSelector: '.col-sm-4',
//        percentPosition: true
//    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

//    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });


    /*---------------------------------------------*
     * Parallax
     ---------------------------------------------*/


//    parallaxInit();
//
//    function parallaxInit() {
//        $('.home-wrap').parallax("30%", 0.3);
//    }


    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/
 
//        var wow = new WOW({
//            mobile: false // trigger animations on mobile devices (default is true)
//        });
//        wow.init();
   

    $(document).ready(function() {
        $(".menu-icon").click(function() {
            $(this).toggleClass("active");
        });
    });


/* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.testimonials').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        autoplayHoverPause: true
//
//    });


    //End

    var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
	
	//Menu Background Change
	
	var windowWidth = $(window).width();
    if (windowWidth > 757) {

        
          
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                    $('.navbar').fadeIn(500);
                    $('.navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }
            });
        
    }
	$('#bs-example-navbar-collapse-1').localScroll();
	
	$(window).scroll(function(){
		if($(this).scrollTop()>200)
		{
			$('.scrollup').fadeIn();
		}
		else
		{
			$('.scrollup').fadeOut();
		}		
	});
	

	
});


//.we are working in the About slide//



