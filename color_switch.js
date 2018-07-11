$(document).ready(function() {
    var target = $('.color_switch');
    var colors = ['white', 'orange', 'red', 'blue', 'purple', 'pink', 'black', 'cyan']


    // Create a loop that will continue
    function loopLi() {
        setInterval(function() {
            // Generate random number for the selection of colors in array
            var ran_num = Math.floor((Math.random() * 8) + 0);
            var ran_size = Math.floor((Math.random() * 3) + 0.25);
            console.log(ran_num);

            // Get the color
            var color = colors[ran_num]
            console.log(color);

            // Change color of target to ran_num
            target.css('color', color);
            target.css('transform', 'scale(' + ran_size + ')')
        }, 50);
    }

    // Run the loop
    $(loopLi);


});