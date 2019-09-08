// TIP  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function () {
    $("#questionmark2").click(function (e) {
        var questionmark = $("#questionmark2");
        questionmark.animate({ top: '800px' }, "fast");

        var tip = $("#tip2");
        tip.animate({ top: '-830px' }, "fast");
    });

    $("#tip2").hover(function (e) {
        var tipbubble = $("#tipbubble2");
        tipbubble.css({ top: '-880px' });
    });


    $("#footerClick").hover(function (e) {
        var tip = $("#tip2");
        var tipbubble = $("#tipbubble2");

        tip.css({ top: '-1450px' });
        tipbubble.css({ top: '-1245px' });
    });
});


// number of drops created.
var nbDrop = 666;

// function to generate a random number range.
function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

    for (i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, 1600);
        var dropTop = randRange(-1000, 1400);

        $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
    }

}


// THIS IS MY CODE TO SUIT MY NEEDS
$("#footerClick").click(function (e) {

    $("footer").find("#footerClick").text("Autumn is here.");

    // Make it rain
    createRain();

    var waterpile1 = $("#waterpile1")
    var waterpile2 = $("#waterpile2")
    var waterpile3 = $("#waterpile3")
    var waterpile4 = $("#waterpile4")

    waterpile1.animate({ bottom: '0px' }, 13100);
    waterpile2.animate({ bottom: '-30px' }, 12800);
    waterpile3.animate({ bottom: '-60px' }, 13200);
    waterpile4.animate({ bottom: '-90px' }, 12900);

    //Change the parallax images
    $(".image9").attr("src", "");
    $(".image8").attr("src", "");

});




