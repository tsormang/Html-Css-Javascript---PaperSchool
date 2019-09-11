$(document).ready(function () {

    // FORM MODAL APPEARANCE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var Counter = 2;
    // Get the modal
    var modal = $("#ModalForm");

    // When the user clicks on <span> (x), close the modal
    $(".close").on({
        'click': function () {
            $(modal).css("display", "none");
        }
    });

    // When the user clicks the +ADD, open the modal 
    $("#btnAddC").on({
        'click': function () {
            $(modal).fadeTo(0, 400, function () {
                $(modal).css("display", "block");
            });

        }
    });

    // VALIDATE the form for adding a new Course
    $("#myForm").validate({
        rules: {
            Title: { required: true, minlength: 5},
            Stream: { required: true, minlength: 5},
            Type: { required: true, minlength: 5},
            StartDate: { required: true},
            EndDate: { required: true}
        },
        messages: {
            Title: { required: "Its not Rocket Science, type at least something!", minlength: "Basic Math, Count to 5, place at least 5 characters!" },
            Stream: { required: "Easy ... , type at least something!", minlength: "You can do it!, place at least 5 characters!" },
            Type: { required: "Press anything of Keyboard letter!", minlength: "C'mon, place at least 5 characters!" }
        },
        // SUBMIT
        submitHandler: function() {

            // SUBMIT THE TABLE ROW

            Counter++;
            var ID = Counter;
            var Title = $("#Title").val();
            var Stream = $("#Stream").val();
            var Type = $("#Type").val();
            var StartDate = $("#StartDate").val();
            var EndDate = $("#EndDate").val();

            $("table tbody").append(
                $('<tr id="' + Counter + '">')
                    .append($('<td>').html(ID))
                    .append($('<td>').html(Title))
                    .append($('<td>').html(Stream))
                    .append($('<td>').html(Type))
                    .append($('<td>').html(StartDate))
                    .append($('<td>').html(EndDate))
                    .append($('<td>').html("<img class='btnDelete' src='Images/delete.png' /> <img class='btnEdit' src='Images/edit.png' />"))
            );

            // TAKE THE FORM MODAL AWAY
            $(modal).fadeTo(400, 0, function () {
                $(modal).css("display", "none");
            });

        },
        success: function (element) {
            element.remove();
        }

    });

    // TABLE BASIC FUNCTIONS EDIT/DELETE

    // DELETE ROW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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


    // EDIT THE CURRENT TEXT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // GET THE TABLE-DATA AND ADD TO THE FORM

    $(document).on("click", ".btnEdit", function () {

        //get id, by a simple method of finding the element
        var ID = $(this).parents('tr').find('td:nth-child(1)').text();
        var currTitle = $(this).parents('tr').find('td:nth-child(2)').text();
        var currStream = $(this).parents('tr').find('td:nth-child(3)').text();
        var currType = $(this).parents('tr').find('td:nth-child(4)').text();
        var currStartDate = $(this).parents('tr').find('td:nth-child(5)').text();
        var currEndDate = $(this).parents('tr').find('td:nth-child(6)').text();

        // Generate the Form in the Modal
         $("#ModalFormEdit").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'>"
            + "<form id='myFormEdit' method='get' action='' target='_self' onsubmit=''>"
            + "<fieldset>"
            + "<span id='rowID'> ID: " + ID + "</span>"
            + "</fieldset>"
            + "<fieldset>"
            + "<br><label for='currTitle'> Title <input type = 'text' value = '" + currTitle + "' id = 'currTitle'></label> <br>"
            + "<br><label for='currStream'>Stream<input type='text' value='" + currStream + "' id='currStream'></label><br>"
            + "<br><label for='currType'>Type<input type='text' value='" + currType + "' id='currType'></label><br>"
            + "<br><label for='currStartDate'>Starting Date<input type='date' value='" + currStartDate + "' id='currStartDate'></label><br>"
            + "<br><label for='currEndDate'>Ending Date<input type='date' value='" + currEndDate + "' id='currEndDate'></label>"
            + "</fieldset>"
            + "<fieldset>"
            + "<input type='button' id='submitbtn' name='Submit' class='btnSaveEdit' value='" + ID +"' >"
            + "</fieldset>"
            + "</form ></div ></div > "
        );


        $("#myFormEdit").validate({

            // VALIDATE
            rules: {
                currTitle: { required: true, minlength: 5 },
                currStream: { required: true, minlength: 5 },
                currType: { required: true, minlength: 5 },
                currStartDate: { required: true },
                currEndDate: { required: true }
            },
            messages: {
                currTitle: { required: "Its not Rocket Science, type at least something!", minlength: "Basic Math, Count to 5, place at least 5 characters!" },
                currStream: { required: "Easy ... , type at least something!", minlength: "You can do it!, place at least 5 characters!" },
                currType: { required: "Press anything of Keyboard letter!", minlength: "C'mon, place at least 5 characters!" }
            },
            // SUBMIT
            submitHandler: function () {

                // SUBMIT THE TABLE ROW
                // SAVE THE NEW TEXT FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                $(document).on("click", ".btnSaveEdit", function () {

                    // SUBMIT THE TABLE ROW
                    var ID = $(this).val();

                    //get the input text
                    var newTitle = $("#currTitle").val();
                    var newStream = $("#currStream").val();
                    var newType = $("#currType").val();
                    var newStartDate = $("#currStartDate").val();
                    var newEndDate = $("#currEndDate").val();

                    //find the specific tr that has an id of.. and look for the corresponding td to change
                    $("#myTable tbody").find("tr#" + ID).find('td').eq('1').text(newTitle);
                    $("#myTable tbody").find("tr#" + ID).find('td').eq('2').text(newStream);
                    $("#myTable tbody").find("tr#" + ID).find('td').eq('3').text(newType);
                    $("#myTable tbody").find("tr#" + ID).find('td').eq('4').text(newStartDate);
                    $("#myTable tbody").find("tr#" + ID).find('td').eq('5').text(newEndDate);

                    $(modalEdit).fadeTo(400, 0, function () {
                        $(modalEdit).css("display", "none");
                    });

                    // TAKE THE FORM MODAL AWAY
                    $(modal).fadeTo(400, 0, function () {
                        $(modal).css("display", "none");
                    });
                });
            },
            success: function (element) {
                element.remove();
            }

        });
    });
});




