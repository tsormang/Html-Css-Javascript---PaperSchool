

// FORM MODAL APPEARANCE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Get the modal
var modal = $("#ModalForm");

// When the user clicks on <span> (x), close the modal
$(".close").on({
    'click': function () {
        $(modal).css("display", "none");
    }
});

// When the user clicks the +ADD, open the modal 
$("#btnAddS").on({
    'click': function () {
        $(modal).fadeTo(0, 400, function () {
            $(modal).css("display", "block");
        });

    }
});

// AVATAR IN MODAL SELECTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var sexID;

$('input[id="Mrs"]:radio').click(function (e) {
    $("#toBeChanged").attr("src", "images/people09.png");
    sexID = "female";
    
});

$('input[id="Mr"]:radio').click(function (e) {
    $("#toBeChanged").attr("src", "images/people05.png");
    sexID = "male";
    
});

// TABLE MANAGEMENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var Counter = 2;

$(document).ready(function () {

    // SUBMIT THE FORM TO ADD A NEW TABLE ROW FUNCTION
    $("#Submitbtn").click(function (e) {
        
        Counter++;
        e.preventDefault();
        var ID = Counter;
        var Avatar = $("#toBeChanged").attr("src");
        var FirstName = $("#FirstName").val();
        var LastName = $("#LastName").val();
        var BirthDate = $("#BirthDate").val();
        var TuitionFees = $("#TuitionFees").val();

        $("table tbody").append(
            $('<tr id="' + Counter + '">')
                .append($('<td>').html(ID))
                .append($('<td>').html("<div class='picFrame'><img class='avatar' src='" + Avatar + "' id='" + sexID +"' /></div>"))
                .append($('<td>').html(FirstName))
                .append($('<td>').html(LastName))
                .append($('<td>').html(BirthDate))
                .append($('<td>').html(TuitionFees))
                .append($('<td>').html("<img class='btnDelete' src='Images/delete.png' /> <img class='btnEdit' src='Images/edit.png' />"))
        );


        // TAKE THE FORM MODAL AWAY
        $(modal).fadeTo(400, 0, function () {
            $(modal).css("display", "none");
        });

    });
});


// DELETE ROW FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).on("click", ".btnDelete", function () {
    $(this).closest('tr').fadeTo(400, 0, function () {
        $(this).remove();
    });
    return false;
});


// GET MODAL FOR EDIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var modalEdit = $("#ModalFormEdit");

// When the user clicks on (x), close the modal
$(document).on("click", ".close", function () {

    $(modalEdit).css("display", "none");

});

// When the user clicks the EDIT, open the modal 
$(document).on("click", ".btnEdit", function () {
    $(modalEdit).fadeTo(0, 400, function () {
        $(modalEdit).css("display", "block");
    });
});


// EDIT THE CURRENT TEXT FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).on("click", ".btnEdit", function () {

    //get id, by a simple method of finding the element
    var ID = $(this).parents('tr').find('td:nth-child(1)').text();
    var currFirstName = $(this).parents('tr').find('td:nth-child(3)').text();
    var currLastName = $(this).parents('tr').find('td:nth-child(4)').text();
    var currBirthDate = $(this).parents('tr').find('td:nth-child(5)').text();
    var currTuitionFees = $(this).parents('tr').find('td:nth-child(6)').text();

    $("#ModalFormEdit").html(
        "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
        + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + ID + "</span></fieldset>"
        + "<fieldset>"
        + "<br><label for='currFirstName'> First Name <input type = 'text' value = '" + currFirstName + "' id = 'currTitle'></label> <br>"
        + "<br><label for='currLastName'>Last Name<input type='text' value='" + currLastName + "' id='currStream'></label><br>"
        + "<br><label for='currBirthDate'>Birth Date<input type='date' value='" + currBirthDate + "' id='currStartDate'></label><br>"
        + "<br><label for='currTuitionFees'>Tuition Fees<input type='date' value='" + currTuitionFees + "' id='currEndDate'></label>"
        + "</fieldset>"
        + "<input type='button' class='btnSaveEdit' name='Submit' value='" + ID + "' ></form></div></div>"
    );

});


// SAVE THE NEW TEXT FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//change text
$(document).on("click", ".btnSaveEdit", function () {

    var ID = $(this).val();

    //get the input text
    var newFirstName = $("#currFirstName").val();
    var newLastName = $("#currLastName").val();
    var newBirthDate = $("#currBirthDate").val();
    var newTuitionFees = $("#currTuitionFees").val();

    //find the specific tr that has an id of.. and look for the corresponding td to change
    $("#myTable tbody").find("tr#" + ID).find('td').eq('2').text(newFirstName);
    $("#myTable tbody").find("tr#" + ID).find('td').eq('3').text(newLastName);
    $("#myTable tbody").find("tr#" + ID).find('td').eq('4').text(newBirthDate);
    $("#myTable tbody").find("tr#" + ID).find('td').eq('5').text(newTuitionFees);

    $(modalEdit).fadeTo(400, 0, function () {
        $(modalEdit).css("display", "none");
    });

});


// AVATAR SELECTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Get the modal
var AvataModal = $("#AvatarModal");
var avatarRowID = 0;

// When the user clicks on (x), close the modal
$(document).on("click", ".close", function () {
    $(AvataModal).css("display", "none");
});

// When the user clicks an AVATAR (Male/Female), open the modal
var AvatarModalMale = $(".AvatarMale");
var AvatarModalFemale = $(".AvatarFemale");

// For MALE (Mr)
$(document).on("click", "#male", function () {
        $(AvataModal).fadeTo(0, 400, function () {
            $(AvataModal).css("display", "block");
            $(AvatarModalMale).css("display", "block");
            $(AvatarModalFemale).css("display", "none");
        });

    // Identify the row ID
    avatarRowID = $(this).parents('tr').find('td:nth-child(1)').text();
    return avatarRowID
});

// For FEMALE (Mrs)
$(document).on("click", "#female", function () {
    $(AvataModal).fadeTo(0, 400, function () {
        $(AvataModal).css("display", "block");
        $(AvatarModalMale).css("display", "none");
        $(AvatarModalFemale).css("display", "block");
    });

    // Identify the row ID
    avatarRowID = $(this).parents('tr').find('td:nth-child(1)').text();
    return avatarRowID
});

// Get the Image
var AvatarChoice = $(".Carousel-Body ol li img")

// Assign the Modal Image to the Target Table Row Avatar
$(AvatarChoice).click(function () {
    var currAvatar = $(this).attr("src");
    $(this).animate({ height: '+=20px' }, 100);
    $(this).animate({ height: '-=20px' }, 120);
    $("#myTable tbody").find("tr#" + avatarRowID).find(".avatar").attr("src", currAvatar);

    setTimeout(function () {
        $(AvataModal).css("display", "none");
    }, 500);
});

