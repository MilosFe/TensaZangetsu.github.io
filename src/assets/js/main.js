(function (global, $) { 
    'use strict'
    //Should refactor this 
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
            //we add 200*i ms delay to each letter 
            setTimeout(function () {
                //we add the letter to the container
                $('#container').html($('#container').html() + letter);

            }, 200 * index);
        });
        i++;
        if (i > 2) {
            i = 0;
        }
    }
    setInterval(type, 6000);
    setInterval (cursorAnimation, 600);
})(this, jQuery)
