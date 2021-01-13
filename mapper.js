// Menu but ton

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scroll 

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

//Geolocation
if (navigator.geolocation) 
      navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      });

