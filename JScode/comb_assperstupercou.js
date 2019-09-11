// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// EXTRA COMBINATION

// STUDENTS PER ASSIGNMENTS PER COURSE         

// TABLE INITIATION
var CounterASC = 1;

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
    // Get the Courses/Assignments from the respective pages and place them to the existing table row no.1

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

    //// Assignments
    //$.get('asses.html', function (result1) {
    //    var AssTitle1 = $(result1).find('#1').find('td').eq('1').text();
    //    var AssTitle2 = $(result1).find('#2').find('td').eq('1').text();
    //    $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('0').text(AssTitle1);
    //    $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('1').text(AssTitle2);
    //})

    //// Courses
    //$.get('courses.html', function (result2) {
    //    var CourseTitle1 = $(result2).find('#1').find('td').eq('1').text();
    //    var CourseTitle2 = $(result2).find('#2').find('td').eq('1').text();
    //    $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('0').text(CourseTitle1);
    //    $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('1').text(CourseTitle2);
    //});


    //// Get Students and Assignments and Courses from the expected pages and place them to out table
    //$.get('students.html', function (result3) {
    //    var StuFirstName1 = $(result3).find('#1').find('td').eq('2').text();
    //    var StuFirstName2 = $(result3).find('#2').find('td').eq('2').text();
    //    var StuLastName1 = $(result3).find('#1').find('td').eq('3').text();
    //    var StuLastName2 = $(result3).find('#2').find('td').eq('3').text();

    //    $.get('courses.html', function (result4) {
    //        var CourseTitle1 = $(result4).find('#1').find('td').eq('1').text();
    //        var CourseTitle2 = $(result4).find('#2').find('td').eq('1').text();

    //        $.get('asses.html', function (result5) {
    //            var AssTitle1 = $(result5).find('#1').find('td').eq('1').text();
    //            var AssTitle2 = $(result5).find('#2').find('td').eq('1').text();

    //            $("#myTableASC tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
    //            $("#myTableASC tbody").append("<tr id='" + (CounterSC + 2) + "'><td> " + (CounterSC + 2) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");

    //        });
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

            $("#myTableASC tbody").append("<tr id='" + (CounterASC) + "'><td> " + (CounterASC) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li><li>" + AssTitle3 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableASC tbody").append("<tr id='" + (CounterASC + 1) + "'><td> " + (CounterASC + 1) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li><li>" + AssTitle3 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableASC tbody").append("<tr id='" + (CounterASC + 2) + "'><td> " + (CounterASC + 2) + " </td><td>" + StuFirstName3 + "</td><td>" + StuLastName3 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li><li>" + AssTitle3 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");


            //// Get the Courses from the 'page:Courses' and place them to the existing table row no.1
            //// Assignments
            //$.get('asses.html', function (result1) {
            //    var AssTitle1 = $(result1).find('#1').find('td').eq('1').text();
            //    var AssTitle2 = $(result1).find('#2').find('td').eq('1').text();
            //    $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('0').text(AssTitle1);
            //    $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('1').text(AssTitle2);
            //})

            //// Courses
            //$.get('courses.html', function (result2) {
            //    var CourseTitle1 = $(result2).find('#1').find('td').eq('1').text();
            //    var CourseTitle2 = $(result2).find('#2').find('td').eq('1').text();
            //    $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('0').text(CourseTitle1);
            //    $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('1').text(CourseTitle2);
            //});

            //// Get Assignments and Courses from the expected pages and place them to out table
            //$.get('students.html', function (result3) {
            //    var StuFirstName1 = $(result3).find('#1').find('td').eq('2').text();
            //    var StuFirstName2 = $(result3).find('#2').find('td').eq('2').text();
            //    var StuLastName1 = $(result3).find('#1').find('td').eq('3').text();
            //    var StuLastName2 = $(result3).find('#2').find('td').eq('3').text();

            //    $.get('courses.html', function (result4) {
            //        var CourseTitle1 = $(result4).find('#1').find('td').eq('1').text();
            //        var CourseTitle2 = $(result4).find('#2').find('td').eq('1').text();

            //        $.get('asses.html', function (result5) {
            //            var AssTitle1 = $(result5).find('#1').find('td').eq('1').text();
            //            var AssTitle2 = $(result5).find('#2').find('td').eq('1').text();

            //            $("#myTableASC tbody").append("<tr id='" + (CounterSC) + "'><td> " + (CounterSC) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            //            $("#myTableASC tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");

            //        });
            //    });
            //});


        }
    });


    // GET MODAL FOR EDIT
    var modalEdit = $("#ModalFormEditASC");

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
        var IDASC = $(this).parents('tr').find('td:nth-child(1)').text();

        //// Get the Courses from the respective page
        //$.get('courses.html', function (result6) {
        //    var currCTitle1 = $(result6).find('#1').find('td').eq('1').text();
        //    var currCTitle2 = $(result6).find('#2').find('td').eq('1').text();

        //    $.get('asses.html', function (result7) {
        //        var currATitle1 = $(result7).find('#1').find('td').eq('1').text();
        //        var currATitle2 = $(result7).find('#2').find('td').eq('1').text();

        //        $("#ModalFormEditASC").html(
        //            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
        //            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDASC + "</span></fieldset>"
        //            + "<p> Assignments </p>"
        //            + "<fieldset>"
        //            + "<label class='container' for='ass1'>" + currATitle1 + "<input type='checkbox' name='assignment' value='" + currATitle1 + "' id='ass1'><span class='checkmark'></span></label>"
        //            + "<label class='container' for='ass2'>" + currATitle2 + "<input type='checkbox' name='assignment' value='" + currATitle2 + "' id='ass2'><span class='checkmark'></span></label>"
        //            + "</fieldset>"
        //            + "<p> Courses </p>"
        //            + "<fieldset>"
        //            + "<label class='container' for='course1'>" + currCTitle1 + "<input type='checkbox' name='course' value='" + currCTitle1 + "' id='course1'><span class='checkmark'></span></label>"
        //            + "<label class='container' for='course2'>" + currCTitle2 + "<input type='checkbox' name='course' value='" + currCTitle2 + "' id='course2'><span class='checkmark'></span></label>"
        //            + "</fieldset>"
        //            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDASC + "' ></form></div></div>"

        //        );
        //    });
        //});

        $("#ModalFormEditASC").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDASC + "</span></fieldset>"
            + "<p> Assignments </p>"
            + "<fieldset>"
            + "<label class='container' for='ass1'>" + AssTitle1 + "<input type='checkbox' name='assignment' value='" + AssTitle1 + "' id='ass1'><span class='checkmark'></span></label>"
            + "<label class='container' for='ass2'>" + AssTitle2 + "<input type='checkbox' name='assignment' value='" + AssTitle2 + "' id='ass2'><span class='checkmark'></span></label>"
            + "<label class='container' for='ass3'>" + AssTitle3 + "<input type='checkbox' name='assignment' value='" + AssTitle3 + "' id='ass3'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<p> Courses </p>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + CourseTitle1 + "<input type='checkbox' name='course' value='" + CourseTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + CourseTitle2 + "<input type='checkbox' name='course' value='" + CourseTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDASC + "' ></form></div></div>"
            )

    });

    // SAVE THE NEW TEXT
    //===========================================================================================
    //===========================================================================================
    //============      To problima mou einai oti den mporei na anagnwrisei      ================
    //============      tin Dynamically generated ID tis JQuery.                 ================
    //============      Enw Stin prwti grammi tou table opou ypirxe hardcoded    ================
    //============      Ola douleuoun ws prepei                                  ================
    //===========================================================================================
    //===========================================================================================

    $(document).on("click", ".btnSaveEdit", function () {

        // Get the number of the table row clicked
        var IDASC = $(this).val();

        //find the specific 'tr' that has an id of.. reset the values
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getass').find('ol').find('li').eq('0').text("");
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getass').find('ol').find('li').eq('1').text("");
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getass').find('ol').find('li').eq('2').text("");
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getcou').find('ol').find('li').eq('0').text("");
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getcou').find('ol').find('li').eq('1').text("");

        //get the input values into an Array
        var chosenAssignments = [];
        $.each($("input[name='assignment']:checked"), function () {
            chosenAssignments.push($(this).val());
        });
        var chosenCourses = [];
        $.each($("input[name='course']:checked"), function () {
            chosenCourses.push($(this).val());
        });

        //find the specific 'tr' that has an id of.. and look for the corresponding 'li' to change
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getass').find('ol').find('li').eq('0').text(chosenAssignments[0]);
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getass').find('ol').find('li').eq('1').text(chosenAssignments[1]);
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getass').find('ol').find('li').eq('1').text(chosenAssignments[2]);
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getcou').find('ol').find('li').eq('0').text(chosenCourses[0]);
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getcou').find('ol').find('li').eq('1').text(chosenCourses[1]);

        $(modalEdit).fadeTo(400, 0, function () {
            $(modalEdit).css("display", "none");
        });
    });

















});




// END