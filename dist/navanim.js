// -- navigation animation -- //
$(document).ready(function() {
    $("nav li").addClass("diveIn");
})


var controller = new ScrollMagic.Controller();
var didheight = $(".did").height();
var scene = new ScrollMagic.Scene({ triggerElement: ".did", duration: didheight })
    .on("enter", function() {
        // trigger animation by changing inline style.
        $("#didMenu").addClass("active");
        $("#didMenu").removeClass("deactive");
        $(".did img").css("filter", "non");
        $(".did img").css("-moz-filter", "non");
        $(".did img").css("-webkit-filter", "non");

    })
    .on("leave", function() {
        // reset style
        $("#didMenu").removeClass("active");
        $("#didMenu").addClass("deactive");
        $(".did img").css("filter", "grayscal()");
        $(".did img").css("-moz-filter", "grayscal()");
        $(".did img").css("-webkit-filter", "grayscal()");
    })
    .addTo(controller);
var scene = new ScrollMagic.Scene({ triggerElement: ".footer", duration: didheight })
    .on("enter", function() {
        // trigger animation by changing inline style.
        $("#contactMenu").addClass("active");
        $("#contactMenu").removeClass("deactive");
    })
    .on("leave", function() {
        // reset style
        $("#contactMenu").removeClass("active");
        $("#contactMenu").addClass("deactive");

    })
    .addTo(controller);
