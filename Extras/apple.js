// RANDOM PAPER FACTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var quotes = new Array(
    "Every day, American businesses use enough paper to circle the globe 20 times.",
    "Our paper money isn’t paper at all. United States currency paper is composed of 75% cotton and 25% linen.",
    "Paper gifts are traditionally given to celebrate a couple’s first year wedding anniversary.",
    "During the American Revolution, paper was so hard to find that soldiers ripped pages from books to use them as wadding (disc of material used in guns) for their rifles.",
    "When the Bible was first produced by Johannes Gutenber, it was printed on parchment (sheep skin). It used the skin of 300 sheep to make.",
    "Each year, more than 2 billion books, 350 million magazines, & 24 billion newspapers are published.",
    "About 70 million tons of paper and paperboard are used by Americans every year.",
    "Our English word “paper” is derived from the word “papyrus“, in Egyptian.",
    "The Chinese invented paper around 105 A.D. from hemp. Eventually, tree bark, bamboo, and other plant fibers were used in addition to hemp.",
    "Paper Rules!!"
);

$("#apple").click(function (e) {

    randno = quotes[Math.floor(Math.random() * quotes.length)];
    $(".modal-content").find("#FactResult").text(randno);

    $("footer").find("#footerClick").text("Click the message to Close.");
});


// FOOTER APPLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function () {
    $("#footerClick").click(function (e) {
        var apple = $("#apple")
        apple.animate({ bottom: '80px' }, "fast");
        apple.animate({ bottom: '78px' }, "fast");
        apple.animate({ bottom: '80px' }, "fast");

        $("footer").find("#footerClick").text("Grab some Apple Wisdom...");

        randno = quotes[Math.floor(Math.random() * quotes.length)];
        $(".modal-content").find("#FactResult").text(randno);
    });
});



// FANCY MODAL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.clear();

var body = document.body;
var modal = createModal(document.querySelector("#modal-1"));
var openButton = document.querySelector("#apple");

openButton.addEventListener("click", function () {
    modal.open();
});

function createModal(container) {

    var content = container.querySelector(".modal-content");
    var dialog = container.querySelector(".modal-dialog");
    var polygon = container.querySelector(".modal-polygon");
    var svg = container.querySelector(".modal-svg");

    var point1 = createPoint(45, 45);
    var point2 = createPoint(55, 45);
    var point3 = createPoint(55, 55);
    var point4 = createPoint(45, 55);

    var animation = new TimelineMax({
        onReverseComplete: onReverseComplete,
        onStart: onStart,
        paused: true
    })
        .to(point1, 0.3, {
            x: 15,
            y: 30,
            ease: Power4.easeIn
        }, 0)
        .to(point4, 0.3, {
            x: 5,
            y: 80,
            ease: Power2.easeIn
        }, "-=0.1")
        .to(point1, 0.3, {
            x: 0,
            y: 0,
            ease: Power3.easeIn
        })
        .to(point2, 0.3, {
            x: 100,
            y: 0,
            ease: Power2.easeIn
        }, "-=0.2")
        .to(point3, 0.3, {
            x: 100,
            y: 100,
            ease: Power2.easeIn
        })
        .to(point4, 0.3, {
            x: 0,
            y: 100,
            ease: Power2.easeIn
        }, "-=0.1")
        .to(container, 1, {
            autoAlpha: 1
        }, 0)
        .to(content, 1, {
            autoAlpha: 1
        })

    var modal = {
        animation: animation,
        container: container,
        content: content,
        dialog: dialog,
        isOpen: false,
        open: open,
        close: close
    };

    body.removeChild(container);

    function onClick() {

        if (modal.isOpen) {
            close();
        }
    }

    function onStart() {
        body.appendChild(container);
        container.addEventListener("click", onClick);
    }

    function onReverseComplete() {
        container.removeEventListener("click", onClick);
        body.removeChild(container);
        $("footer").find("#footerClick").text("Grab some Apple Wisdom...");
    }

    function open() {
        modal.isOpen = true;
        animation.play().timeScale(2);
    }

    function close() {
        modal.isOpen = false;
        animation.reverse().timeScale(2.5);
    }

    function createPoint(x, y) {
        var point = polygon.points.appendItem(svg.createSVGPoint());
        point.x = x || 0;
        point.y = y || 0;
        return point;
    }

    return modal;
}


