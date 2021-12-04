function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
(function($) { "use strict";

  $(function() {
    var header = $(".start-style");
    var logo = $(".deirvlon_show")
    var logo1 = $(".deirvlon_hide")
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
    
      if (scroll >= 10) {
        logo.removeClass('deirvlon_show').addClass("deirvlon_hide");
        logo1.removeClass('deirvlon_hide').addClass("deirvlon_show");
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
        logo.removeClass('deirvlon_hide').addClass("deirvlon_show");
        logo1.removeClass('deirvlon_show').addClass("deirvlon_hide");
      }
    });
  });   
    
  //Animation
  
  $(document).ready(function() {
    $('div.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover
    
  $('body').on('mouseenter mouseleave','.nav-item',function(e){
      if ($(window).width() > 750) {
        var _d=$(e.target).closest('.nav-item');_d.addClass('show');
        setTimeout(function(){
        _d[_d.is(':hover')?'addClass':'removeClass']('show');
        },1);
      }
  }); 
  })(jQuery); 
// Blog carousel

$(document).ready(function() {
 $('.blog .owl-carousel ').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-angle-double-left'></i>",
    "<i class='fa fa-angle-double-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})
 $('.blog-media .owl-carousel ').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-angle-double-left'></i>",
    "<i class='fa fa-angle-double-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})
});

// Media carousel
// $(".slider1").owlCarousel({
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 2000, //2000ms = 2s;
//         autoplayHoverPause: true,
//       });
// Word animation
$(function () {
  $(".text").typed({
    strings:["We are automating", "your business", "with Hardware", "and Software", "solutions."],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1500,
    showCursor: true,
    loop: true
  });
});
// Data-aos
AOS.init({
  duration:800,
})
 $(document).ready(function() {
$('input').on('change', function() {
  $('.body').toggleClass('blue');
});
})