(function (global, $) {
    'use strict';
    var Typewriter = function (selector) {
        return new Typewriter.init(selector);
    };

    Typewriter.prototype = {
        hide: function (x) {
            var selector = selector;
            console.log(selector);
            selector.html("");
            $.each(x[i].split(''), function (index, letter) {
                //we add 200*i ms delay to each letter 
                setTimeout(function () {
                    //we add the letter to the container
                    selector.html(selector.html() + letter);

                }, 100 * index);
            });
            i++;
            if (i > 1) {
                i = 0;
            }
        }
    };
    Typewriter.init = function (selector) {
        var selector = $(selector);
        var len = selector.html.length;
        console.log(len);

        return selector;
    }


    Typewriter.init.prototype = Typewriter.prototype;
    global.Typewriter = Typewriter;

}(this, jQuery));
Typewriter("#type").hide(['Developer', 'Designer']);
