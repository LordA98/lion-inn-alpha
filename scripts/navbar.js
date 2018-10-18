
// Change navbar background colour and font colour
// Once navbar gets to FOOD section
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll > 800) {
            $(".header").css("background" , "#FFF");
            $(".header a.enabled").css("color" , "#000");
        }

        else{
            $(".header").css("background" , "transparent");
            $(".header a.enabled").css("color" , "#FFF");
        }
    })
})
