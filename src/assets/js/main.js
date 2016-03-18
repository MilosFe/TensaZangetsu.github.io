(function (global, $) {
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
    window.setInterval(type, 6000);

})(this, jQuery)
