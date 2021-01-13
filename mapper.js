// Menu button

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
      //console.log(position);
      let lat= position.coords.latitude;
      let long=position.coords.longitude;
      console.log(lat,long);
      });

//calculating nearest store location
      
//fetch json 
fetch("path.json")
      .then(response=>response.json())
      .then(data=>{
            let address= data
            console.log(address)
                  })

//parsing through
