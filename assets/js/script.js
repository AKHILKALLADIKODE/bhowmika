// ///////////// BANNER NUMBER COUNT START//////////////////
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 20000, // Increase the duration for slower counting
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// ///////////// BANNER NUMBER COUNT END//////////////////

// ///////////// SLIDER START//////////////////

$('#testimonials').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    autoplayHoverPause:true,
    autoplay:true, // Add this line to enable autoplay
    autoplayTimeout:3000, // Specify the time interval in milliseconds (e.g., 5000ms or 5 seconds)
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})
$('#gallery').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2.5,
            nav:true,
            loop:true
        }
    }
})

$('#ourteam').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    autoplayHoverPause:true,
    autoplay:true,
    autoplayTimeout:3000, // Specify the time interval in milliseconds (e.g., 5000ms or 5 seconds)
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:5.2,
            nav:true,
            loop:true
        }
    }
})
$('#productbtn').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1.4,
            nav:false
        },
        500:{
            items:1.6,
            nav:false
        },
        600:{
            items:2.8,
            nav:false
        },
        991:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
})
$('#productbtn-t').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1.6,
            nav:false
        },
        500:{
            items:1.8,
            nav:false
        },
        600:{
            items:2.8,
            nav:false
        },
        991:{
            items:4,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})
// ///////////// SLIDER END//////////////////

// ///////////// GALLERY START//////////////////
function openModal() {
    var modals = document.getElementsByClassName("myModal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "block";
    }
  }
  
  function closeModal() {
    var modals = document.getElementsByClassName("myModal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementsByClassName("caption")[0];
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  
  // ///////////// GALLERY END//////////////////