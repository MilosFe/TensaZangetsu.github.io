(function (global, $) {
    'use strict';
    
     var docElem = global.document.documentElement;
     var factor = 0.2;
     var animateEl = document.getElementById('me'); 

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
        var container = $("#container");
        container.html("");
        $.each(x[i].split(''), function (index, letter) {
            //we add 100*i ms sets delay to each letter 
            setTimeout(function () {
                //we add the letter to the container
                container.html(container.html() + letter);

            }, 100 * index);
        });
        i++;
        if (i > 2) {
            i = 0;
        }
    }
    //Google MAPS Api V3
  

    var setDate = function () {
            var d = new Date();
            document.getElementById('date').innerHTML = 'Radoman Milos Git &#169;' + d.getFullYear()
        }
        //* Note to thy self - this is ugly refactor it
    var menu = function () {
        var navigation = $('.navigation');
        $(document).on("click", ".header-dark .fa", function () {
            navigation.slideToggle('fast');
        });
        $(document).on("click", ".header-dark .navigation  ul li a", function () {
            //Remove slide menu on click
            if ($(window).width() < 501) {
                navigation.slideToggle('fast');
            };
            //Html is needed for Firefox otherwise works fine with body
            $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
            return false;
        });
    } 
         
         
        //Init functions :) 
    menu();
    setDate();
    setInterval(type, 4000);
    setInterval(cursorAnimation, 600);



})(this, jQuery)

 