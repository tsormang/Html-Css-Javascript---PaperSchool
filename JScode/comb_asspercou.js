// ASSIGNMENTS PER COURSE
// TABLE INITIATION
var CounterAC = 1;

var CourseTitle1 = "Origami";
var CourseTitle2 = "Paper Mache";
var AssTitle1 = "Origami Folding";
var AssTitle2 = "Mache Intro";
var AssTitle3 = "Post it";
var StuFirstName1 = "Fytos";
var StuFirstName2 = "Kalos";
var StuFirstName3 = "Metrios";
var StuLastName1 = "Psarouklos";
var StuLastName2 = "Mathitidis";
var StuLastName3 = "Axristopoulos";

// INITIALISE TABLE
$(document).ready(function () {
    // Get the Courses from the 'page:Courses' and place them to the existing table row no.1

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Crome/Firefox COR protocol problem
    // Den mou afinei tin JS na exei access sto *.html kai na parei dedomena
    // Douleuei mia xara mesw VS kai EDGE
    // Kata synepeia gia xari tis askisis, parablepw auto to kodika
    // kai bazw ta dedomena 'koumpota'
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    //$.get('courses.html', function (result) {
    //    var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
    //    var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
    //    $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
    //    $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
    //});

    // Get Assignments and Courses from the expected pages and place them to out table

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Crome/Firefox COR protocol problem
    // Den mou afinei tin JS na exei access sto *.html kai na parei dedomena
    // Douleuei mia xara mesw VS kai EDGE
    // Kata synepeia gia xari tis askisis, parablepw auto to kodika
    // kai bazw ta dedomena 'koumpota'
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    //$.get('asses.html', function (result) {
    //    var AssTitle1 = $(result).find('#1').find('td').eq('1').text();
    //    var AssTitle2 = $(result).find('#2').find('td').eq('1').text();
    //    $.get('courses.html', function (result) {
    //        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
    //        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
    //        $("#myTableC tbody").append("<tr id='" + (CounterAC + 1) + "'><td> " + (CounterAC + 1) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
    //        $("#myTableC tbody").append("<tr id='" + (CounterAC + 2) + "'><td> " + (CounterAC + 2) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
    //    });
    //});

    // DELETE ROW
    $(document).on("click", ".btnDelete", function () {
        $(this).closest('tr').fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false;
    });

    // REFRESH TABLE
    // When the user clicks the +ADD, open the modal 
    $("#btnRefresh").on({
        'click': function () {
            $("td").remove();

            $("#myTableC tbody").append("<tr id='" + (CounterAC) + "'><td> " + (CounterAC) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableC tbody").append("<tr id='" + (CounterAC + 1) + "'><td> " + (CounterAC + 1) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableC tbody").append("<tr id='" + (CounterAC + 2) + "'><td> " + (CounterAC + 2) + " </td><td>" + AssTitle3 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");


            // Get the Courses from the 'page:Courses' and place them to the existing table row no.1

            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // Crome/Firefox COR protocol problem
            // Den mou afinei tin JS na exei access sto *.html kai na parei dedomena
            // Douleuei mia xara mesw VS kai EDGE
            // Kata synepeia gia xari tis askisis, parablepw auto to kodika
            // kai bazw ta dedomena 'koumpota'
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            //$.get('courses.html', function (result) {
            //    var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            //    var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            //    $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
            //    $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
            //});

            // Get Assignments and Courses from the expected pages and place them to out table

            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // Crome/Firefox COR protocol problem
            // Den mou afinei tin JS na exei access sto *.html kai na parei dedomena
            // Douleuei mia xara mesw VS kai EDGE
            // Kata synepeia gia xari tis askisis, parablepw auto to kodika
            // kai bazw ta dedomena 'koumpota'
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            //$.get('asses.html', function (result) {
            //    var AssTitle1 = $(result).find('#1').find('td').eq('1').text();
            //    var AssTitle2 = $(result).find('#2').find('td').eq('1').text();
            //    $.get('courses.html', function (result) {
            //        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            //        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            //        $("#myTableC tbody").append("<tr id='" + (CounterAC) + "'><td> " + (CounterAC) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            //        $("#myTableC tbody").append("<tr id='" + (CounterAC + 1) + "'><td> " + (CounterAC + 1) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");


            //    });
            //});
        }
    });


    // GET MODAL FOR EDIT
    var modalEdit = $("#ModalFormEditC");

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

    // EDIT THE CURRENT TEXT
    $(document).on("click", ".btnEdit", function () {

        //get id, by a simple method of finding the element
        var IDAC = $(this).parents('tr').find('td:nth-child(1)').text();

        // Get the Courses from the respective page

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Crome/Firefox COR protocol problem
        // Den mou afinei tin JS na exei access sto *.html kai na parei dedomena
        // Douleuei mia xara mesw VS kai EDGE
        // Kata synepeia gia xari tis askisis, parablepw auto to kodika
        // kai bazw ta dedomena 'koumpota'
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        //$.get('courses.html', function (result) {
        //    var currTitle1 = $(result).find('#1').find('td').eq('1').text();
        //    var currTitle2 = $(result).find('#2').find('td').eq('1').text();
        //    var currTitle3 = $(result).find('#3').find('td').eq('1').text();

        //    $("#ModalFormEditC").html(
        //        "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
        //        + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDAC + "</span></fieldset>"
        //        + "<fieldset>"
        //        + "<label class='container' for='course1'>" + currTitle1 + "<input type='checkbox' name='course' value='" + currTitle1 + "' id='course1'><span class='checkmark'></span></label>"
        //        + "<label class='container' for='course2'>" + currTitle2 + "<input type='checkbox' name='course' value='" + currTitle2 + "' id='course2'><span class='checkmark'></span></label>"
        //        + "<label class='container' for='course3'>" + currTitle3 + "<input type='checkbox' name='course' value='" + currTitle3 + "' id='course3'><span class='checkmark'></span></label>"
        //        + "</fieldset>"
        //        + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDAC + "' ></form></div></div>"
        //    );

        //});

        $("#ModalFormEditC").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDAC + "</span></fieldset>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + CourseTitle1 + "<input type='checkbox' name='course' value='" + CourseTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + CourseTitle2 + "<input type='checkbox' name='course' value='" + CourseTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDAC + "' ></form></div></div>"
        );


        // SAVE THE NEW TEXT
        //===========================================================================================
        //===========================================================================================
        //============      To problima mou einai oti den mporei na anagnwrisei      ================
        //============      tin Dynamically generated ID tis JQuery.                 ================
        //============      Enw stis grammes hardcoded kai oxi JS generated          ================
        //============      Ola douleuoun ws prepei                                  ================
        //===========================================================================================
        //===========================================================================================

        $(document).on("click", ".btnSaveEdit", function () {

            // Get the number of the table row clicked
            var IDAC = $(this).val();

            //find the specific 'tr' that has an id of.. reset the values
            $("#myTableC tbody").find("tr#" + IDAC).find('td').find('ol').find('li').eq('0').text("");
            $("#myTableC tbody").find("tr#" + IDAC).find('td').find('ol').find('li').eq('1').text("");

            //get the input values into an Array
            var chosenCourses = [];
            $.each($("input[name='course']:checked"), function () {
                chosenCourses.push($(this).val());
            });

            //find the specific 'tr' that has an id of.. and look for the corresponding 'li' to change
            $("#myTableC tbody").find("tr#" + IDAC).find('td').find('ol').find('li').eq('0').text(chosenCourses[0]);
            $("#myTableC tbody").find("tr#" + IDAC).find('td').find('ol').find('li').eq('1').text(chosenCourses[1]);

            $(modalEdit).fadeTo(400, 0, function () {
                $(modalEdit).css("display", "none");
            });
        });
    });


























});






// END