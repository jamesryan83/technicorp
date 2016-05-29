"use strict";

window.onload = function () {

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
