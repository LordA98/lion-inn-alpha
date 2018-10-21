
$(document).ready(function(){
    var lion_purple = "#673ab7";

    // Change navbar background colour, font colour and hamburger icon
    // Once navbar gets to FOOD section
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll > 800) {
            $(".header").css("background" , "#FFF");
            $(".header a.enabled").css("color" , "#000");
            $(".navbar-toggler i").css("color" , lion_purple);
        }

        else {
            $(".header").css("background" , "transparent");
            $(".header a.enabled").css("color" , "#FFF");
            $(".navbar-toggler i").css("color" , "#FFF");
        }
    });

    // On hamburger click
    // Change header section (where logo and hamburger is)
    $('#hamburger').click(function() {
        // Toggle hamburger colour
        $(".navbar-toggler i").toggleClass("purple-hamburger");
        // Toggle background colour
        $("#navbar-main").toggleClass("clicked");
    });

    // Close navbar when a nav element link is clicked
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
})
