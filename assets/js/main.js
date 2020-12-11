/*----------------------------------------
                Frontpage
------------------------------------------*/
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoHeight:true,
    responsiveClass: true,
    dots: true,
    navigation : false,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items:1,
        nav: true                  
      }
    }
  })
})

$(document).ready(function(){
  $("#contact").click(function(){
    $path = $("#contactus").offset().top;
    $('html, body').animate({scrollTop:$path},1000);
  });
});


