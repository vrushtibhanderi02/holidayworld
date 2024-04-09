 // pre-loader
 $(document).ready(function(){
    setTimeout(function(){
      $('.pre-loader').fadeOut();
    },3000);
  });
  
// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// custom slider

$(document).ready(function(){

    // travelsection-slider
    $("#travel-img").owlCarousel({
        loop:true,
        margin:26,
        slideTransition:'linear',
        items:4,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:700,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
    });

    // travel-best offer
    $('#slider-offer').owlCarousel({
        loop:true,
        margin:30,
        slideTransition:'linear',
        items:3,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:700,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
    });

    // client-slider
    $('#c-slider').owlCarousel({
        loop:true,
        margin:30,
        slideTransition:'linear',
        items:3,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:700
    });


    // bottom to top arrow
    var btn = $('.bottomtop');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        btn.fadeIn();
    } else {
        btn.fadeOut();
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
  });
 