// -- smooth scroll on-click -- //
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

/*
$(".logo").click(function(){
    $("body").css("background-color", "hsla(0, 0%, 6%, 1)");
    $("body").css("background-image", "none");
    $("body").css("color", "var(--night-body-color)");
    $(".frame").css("background-color", "hsla(0, 0%, 10%, 1)");
    $("-webkit-scrollbar-thumb").css("background", "red !important");
});
*/

// -- logo:hover animation -- //
$('.logo').on('mouseenter mouseleave', function(event) {
    var move = event.type == 'mouseenter' ? 1 : 0;
    var op = event.type == 'mouseenter' ? 1 : 0;
    var nop = event.type == 'mouseenter' ? 0 : 1;
    $('#efeck').animate({
        opacity: nop,
    }, 100)
    $('#r').animate({
        left: -move,
        top: move,
    }, 'fast')
    $('#g').animate({
        top: -move,
    }, 'fast')
    $('#b').animate({
        left: move,
        top: move,
    }, 'fast')
});


// -- logo:drawing disappears -- //
$("#efeckPath").delay(2000).fadeTo('fast', 0.0);


