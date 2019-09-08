// TABLE INITIATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var Counter = 1;

// INITIALISE TABLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).ready(function () {

    // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
    $.get('courses.html', function (result) {
        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();

        $("#myTable tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
        $("#myTable tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);

    });


    // Get Assignments and Courses from the expected pages and place them to out table
    $.get('asses.html', function (result) {
        var AssTitle1 = $(result).find('#1').find('td').eq('1').text();
        var AssTitle2 = $(result).find('#2').find('td').eq('1').text();

        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();

            $("table tbody").append("<tr id='" + (Counter + 1) + "'><td> " + (Counter+1) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("table tbody").append("<tr id='" + (Counter + 2) + "'><td> " + (Counter+2) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");

        });

    });



    // DELETE ROW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $(document).on("click", ".btnDelete", function () {
        $(this).closest('tr').fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false;
    });

});

// REFRESH TABLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// When the user clicks the +ADD, open the modal 
$("#btnRefresh").on({
    'click': function () {

        $("td").remove();

        // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();

            $("#myTable tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
            $("#myTable tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);

        });


        // Get Assignments and Courses from the expected pages and place them to out table
        $.get('asses.html', function (result) {
            var AssTitle1 = $(result).find('#1').find('td').eq('1').text();
            var AssTitle2 = $(result).find('#2').find('td').eq('1').text();

            $.get('courses.html', function (result) {
                var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
                var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();

                $("table tbody").append("<tr id='" + (Counter) + "'><td> " + (Counter) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
                $("table tbody").append("<tr id='" + (Counter + 1) + "'><td> " + (Counter+1) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            });

        });

    }
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
$(document).on("click", ".btnEdit", function () {

    //get id, by a simple method of finding the element
    var ID = $(this).parents('tr').find('td:nth-child(1)').text();

    // Get the Courses from the respective page
    $.get('courses.html', function (result) {
        var currTitle1 = $(result).find('#1').find('td').eq('1').text();
        var currTitle2 = $(result).find('#2').find('td').eq('1').text();

        $("#ModalFormEdit").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + ID + "</span></fieldset>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + currTitle1 + "<input type='checkbox' name='course' value='" + currTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + currTitle2 + "<input type='checkbox' name='course' value='" + currTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + ID + "' ></form></div></div>"
        );

    });

});

// SAVE THE NEW TEXT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//===========================================================================================
//===========================================================================================
//============      To problima mou einai oti den mporei na anagnwrisei      ================
//============      tin Dynamically generated ID tis JQuery                  ================
//============      Stin prwti grammi tou table opou ypirxe hardcoded        ================
//============      Ola douleuoun ws prepei                                  ================
//===========================================================================================
//===========================================================================================




$(document).on("click", ".btnSaveEdit", function () {

    // Get the number of the table row clicked
    var ID = $(this).val();


    //find the specific 'tr' that has an id of.. reset the values
    $("#myTable tbody").find("tr#" + ID).find('td').find('ol').find('li').eq('0').text("");
    $("#myTable tbody").find("tr#" + ID).find('td').find('ol').find('li').eq('1').text("");

    //get the input values into an Array
    var chosenCourses = [];
    $.each($("input[name='course']:checked"), function () {
        chosenCourses.push($(this).val());
    });
    alert("You have chosen: " + chosenCourses.join(", "));


    //find the specific 'tr' that has an id of.. and look for the corresponding 'li' to change
    $("#myTable tbody").find("tr#" + ID).find('td').find('ol').find('li').eq('0').text(chosenCourses[0]);
    $("#myTable tbody").find("tr#" + ID).find('td').find('ol').find('li').eq('1').text(chosenCourses[1]);



    $(modalEdit).fadeTo(400, 0, function () {
        $(modalEdit).css("display", "none");
    });

});