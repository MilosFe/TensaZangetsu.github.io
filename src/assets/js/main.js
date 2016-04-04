(function (global, $) {
    'use strict';

    //Should refactor this for future use
    function cursorAnimation() {
        $('#cursor').animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');
    }

    var x = ["Developer",
            "Designer",
            "Coder"];
    var i = 0;
    //Closure should not be after break up
    function type() {
        $("#container").html("");
        $.each(x[i].split(''), function (index, letter) {
            //we add 100*i ms sets delay to each letter 
            setTimeout(function () {
                //we add the letter to the container
                $('#container').html($('#container').html() + letter);

            }, 100 * index);
        });
        i++;
        if (i > 2) {
            i = 0;
        }
    }
    //Google MAPS Api V3
    function initMap() {
        var myLatLng = {
            lat: 44.80898,
            lng: 20.4784
        };


        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            zoom: 17
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            title: 'My residence'
        });
        // Center my map on global resize
        google.maps.event.addDomListener(global, 'resize', function () {
            var center = map.getCenter()
            google.maps.event.trigger(map, "resize")
            map.setCenter(center)
        })
    }


    var setDate = function(){
        var d = new Date();
        document.getElementById('date').innerHTML = 'Radoman Milos Git &#169;' + d.getFullYear()  
    } 
  

    //* Note to thy self - this is ugly refactor it
    var menu = function () {
        $(document).on("click", ".header-dark .fa", function () {
            $('.navigation').slideToggle('fast');
        });
        $(document).on("click", ".header-dark .navigation  ul li a", function () {
            //Remove slide menu on click
            if ($(window).width() < 501) {
                $('.navigation').slideToggle('fast');
            };
            //Html is needed for Firefox otherwise works fine with body
            $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
            return false;
        });

    }

 

    //Init functions :) 
    initMap();
    menu();
    setDate();
    setInterval(type, 4000);
    setInterval(cursorAnimation, 600);



})(this, jQuery)
