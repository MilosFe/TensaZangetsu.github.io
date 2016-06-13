(function (global, $) {
    'use strict';

    $('header i').click(function () {
        $('.main-nav').fadeToggle();
    });
    $(".main-nav a").click(function(){
        var headerH = $('header').height();
        $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    })
  
    
    var waypoint = new Waypoint({
        element: document.getElementById('feature'),
        handler: function (direction) {
            if(direction === 'down'){
               $("nav").addClass("sticky");
            }
            else {
               $("nav").removeClass("sticky"); 
            }
        },
        offset: '10%'
    })

}(this, jQuery));
