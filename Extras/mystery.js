// FOOTER CHEST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function () {
    var Clkcounter = 0;
    var Pancounter = 0;

    $("#footerClick").click(function () {
        Clkcounter++;

        if (Clkcounter === 1) {
            $("footer").find("#footerClick").text("Wait, what are you doing?");
        }
        else if (Clkcounter === 2) {
            $("footer").find("#footerClick").text("Told you to go away...");
        }
        else if (Clkcounter === 3) {
            $("footer").find("#footerClick").text("Seriously do not do that again.");
        }
        else if (Clkcounter === 4) {
            var Box = $("#pandora")
            Box.animate({ bottom: '150px' }, "fast");
            Box.animate({ bottom: '148px' }, "fast");
            Box.animate({ bottom: '150px' }, "fast");
            $("footer").find("#footerClick").text("Oh no, do NOT click that...");
        }
    });

    $("#pandora").click(function () {
        Pancounter++;

        if (Pancounter === 1) {
            $("footer").find("#footerClick").text("Here we go Again...");
        }
        else if (Pancounter === 2) {
            $("footer").find("#footerClick").text("You have to Stop Clicking...");
        }
        else if (Pancounter === 3) {
            $("footer").find("#footerClick").text("This Belongs to a gal named Pandora.");
        }
        else if (Pancounter === 4) {
            $("footer").find("#footerClick").text("It is said not to be Opened");
        }
        else if (Pancounter === 5) {
            $("footer").find("#footerClick").text("Last Warning");
        }
        else if (Pancounter > 5) {
            window.open("Extras/PandorasBox.html");
        }
    });

    
});
