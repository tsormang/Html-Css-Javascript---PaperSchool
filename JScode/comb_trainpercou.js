// STUDENT PER COURSE           
// TABLE INITIATION
var CounterSC = 1;

var CourseTitle1 = "Origami";
var CourseTitle2 = "Paper Mache";
var trainFirstName1 = "Daskalos";
var trainFirstName2 = "Scottish";
var trainFirstName3 = "Hector";
var trainLastName1 = "Kathigitis";
var trainLastName2 = "MacTeacher";
var trainLastName3 = "Gatsos";


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
    //    $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
    //    $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
    //});


    //// Get Students and Courses from the expected pages and place them to out table
    //$.get('students.html', function (result) {
    //    var StuFirstName1 = $(result).find('#1').find('td').eq('2').text();
    //    var StuFirstName2 = $(result).find('#2').find('td').eq('2').text();
    //    var StuLastName1 = $(result).find('#1').find('td').eq('3').text();
    //    var StuLastName2 = $(result).find('#2').find('td').eq('3').text();
    //    $.get('courses.html', function (result) {
    //        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
    //        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
    //        $("#myTableS tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
    //        $("#myTableS tbody").append("<tr id='" + (CounterSC + 2) + "'><td> " + (CounterSC + 2) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
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
            $("#myTableT tbody").append("<tr id='" + (CounterSC) + "'><td> " + (CounterSC) + " </td><td>" + trainFirstName1 + "</td><td>" + trainLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableT tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + trainFirstName2 + "</td><td>" + trainLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableT tbody").append("<tr id='" + (CounterSC + 2) + "'><td> " + (CounterSC + 2) + " </td><td>" + trainFirstName3 + "</td><td>" + trainLastName3 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");

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

            //// Get the Courses from the 'page:Courses' and place them to the existing table row no.1
            //$.get('courses.html', function (result) {
            //    var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            //    var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            //    $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
            //    $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
            //});

            //// Get Assignments and Courses from the expected pages and place them to out table
            //$.get('students.html', function (result) {
            //    var StuFirstName1 = $(result).find('#1').find('td').eq('2').text();
            //    var StuFirstName2 = $(result).find('#2').find('td').eq('2').text();
            //    var StuLastName1 = $(result).find('#1').find('td').eq('3').text();
            //    var StuLastName2 = $(result).find('#2').find('td').eq('3').text();
            //    $.get('courses.html', function (result) {
            //        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            //        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            //        $("#myTableS tbody").append("<tr id='" + (CounterSC) + "'><td> " + (CounterSC) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            //        $("#myTableS tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");


            //    });
            //});
        }
    });


    // GET MODAL FOR EDIT
    var modalEdit = $("#ModalFormEditT");

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
        var IDSC = $(this).parents('tr').find('td:nth-child(1)').text();


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

        //// Get the Courses from the respective page
        //$.get('courses.html', function (result) {
        //    var currTitle1 = $(result).find('#1').find('td').eq('1').text();
        //    var currTitle2 = $(result).find('#2').find('td').eq('1').text();

        //    $("#ModalFormEditS").html(
        //        "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
        //        + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDSC + "</span></fieldset>"
        //        + "<fieldset>"
        //        + "<label class='container' for='course1'>" + currTitle1 + "<input type='checkbox' name='course' value='" + currTitle1 + "' id='course1'><span class='checkmark'></span></label>"
        //        + "<label class='container' for='course2'>" + currTitle2 + "<input type='checkbox' name='course' value='" + currTitle2 + "' id='course2'><span class='checkmark'></span></label>"
        //        + "</fieldset>"
        //        + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDSC + "' ></form></div></div>"
        //    );

        //});

        $("#ModalFormEditT").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDSC + "</span></fieldset>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + CourseTitle1 + "<input type='checkbox' name='course' value='" + CourseTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + CourseTitle2 + "<input type='checkbox' name='course' value='" + CourseTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDSC + "' ></form></div></div>"
        );


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
            var IDSC = $(this).val();

            //find the specific 'tr' that has an id of.. reset the values
            $("#myTableT tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('0').text("");
            $("#myTableT tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('1').text("");

            //get the input values into an Array
            var chosenCourses = [];
            $.each($("input[name='course']:checked"), function () {
                chosenCourses.push($(this).val());
            });

            //find the specific 'tr' that has an id of.. and look for the corresponding 'li' to change
            $("#myTableT tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('0').text(chosenCourses[0]);
            $("#myTableT tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('1').text(chosenCourses[1]);

            $(modalEdit).fadeTo(400, 0, function () {
                $(modalEdit).css("display", "none");
            });
        });
    });



























});




// END