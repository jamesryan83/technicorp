"use strict";

window.onload = function () {

    // load svgs and images that arean't loaded on startup
    var urls = [
        "res/svg/icon_background_dialog.svg",
        "res/svg/icon_close_hover.svg",
        "res/svg/icon_handle_hover.svg",
        "res/svg/icon_nav_area.svg",
        "res/images/p/p1b.jpg",
        "res/images/p/p2b.jpg",
        "res/images/p/p3b.jpg",
        "res/images/p/p4b.jpg"
    ]

    for (var i = 0; i < urls.length; i++) {
        var img = new Image();
        img.src = urls[i];
    }


    // setup subheading animated text
    $("#subheading").airport([ 'moscow', 'berlin', 'stockholm', 'new york', 'tokyo', 'sydney', 'london' ]);


    // Hide/show navbar
    $("#btn-nav").click(function() {
        var pos = $("#nav-bar").offset().left === 0 ? -400 : 0;
        $("#nav-bar").animate({
            left: pos
        }, 300);
    });


    // Hide/show dialog
    $("#btn-login").click(function () {
        $("#dialog-container").show();
    })

    $("#dialog-btn-close").click(function () {
        $("#dialog-container").hide();
    })
}
