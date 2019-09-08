
// VALIDATIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// FORM VALIDATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$("form").validate({
    debug: true
});


$("#Title").rules("add", {
    required: true,
    minlength: 5,
    messages: {
        required: "Required input",
        minlength: jQuery.validator.format("Please, at least {0} characters are necessary"),
    }
});

$("#currTitle").rules("add", {
    required: true,
    minlength: 5,
    messages: {
        required: "Required input",
        minlength: jQuery.validator.format("Please, at least {0} characters are necessary"),
    }
});

$("#Stream").rules("add", {
    required: true,
    minlength: 5,
    messages: {
        required: "Required input",
        minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
    }
});

$("#currStream").rules("add", {
    required: true,
    minlength: 5,
    messages: {
        required: "Required input",
        minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
    }
});

$("#Type").rules("add", {
    required: true,
    minlength: 2,
    messages: {
        required: "Required input",
        minlength: jQuery.validator.format("Please, at least {0} characters are necessary"),
    }
});

$("#currType").rules("add", {
    required: true,
    minlength: 2,
    messages: {
        required: "Required input",
        minlength: jQuery.validator.format("Please, at least {0} characters are necessary"),
    }
});

$("#StartDate").rules("add", {
    required: true,
    date: true,
    messages: {
        required: "Required input",
        date: jQuery.validator.format("Please, input a valid Date"),
    }
});

$("#currStartDate").rules("add", {
    required: true,
    date: true,
    messages: {
        required: "Required input",
        date: jQuery.validator.format("Please, input a valid Date"),
    }
});

$("#EndDate").rules("add", {
    required: true,
    date: true,
    messages: {
        required: "Required input",
        date: jQuery.validator.format("Please, input a valid Date"),
    }
});

$("#currEndDate").rules("add", {
    required: true,
    date: true,
    messages: {
        required: "Required input",
        date: jQuery.validator.format("Please, input a valid Date"),
    }
});