// FOOTER STUDENTDESK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function () {
    $(".main-body").hover(function (e) {
        var studesk = $("#studentdesk")
        studesk.animate({ bottom: '262px' }, "fast");
    });

    $("#studentdesk").click(function (e) {
        var studesk = $("#studentdesk")
        studesk.css({ bottom: '-200px' });
    });
});



//// TIP  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//$(document).ready(function () {
//    $("#questionmark").click(function (e) {
//        var questionmark = $("#questionmark");
//        questionmark.animate({ top: '800px' }, "fast");

//        var tip = $("#tip");
//        tip.animate({ top: '-840px' }, "fast");
//    });

//    $("#tip").hover(function (e) {
//        var tipbubble = $("#tipbubble");
//        tipbubble.css({ top: '-880px' });
//    });


//    $("#footerClick").hover(function (e) {
//        var tip = $("#tip");
//        var tipbubble = $("#tipbubble");

//        tip.css({ top: '-1450px' });
//        tipbubble.css({ top: '-1245px' });
//    });
//});


// TIP NEW  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function () {
    var qG = $("#questionGlobe");
    var tipbubble = $("#tipDialogue");

    $(qG).click(function (e) {

        qG.animate({ top: '-300px' }, "fast");
        tipbubble.animate({ top: '-40px' }, "fast");
    });


    // Take everything away
    $("#footerClick").hover(function (e) { 

        qG.animate({ top: '-300px' }, "fast");
        tipbubble.animate({ top: '-300px' }, "fast");
    });
});