
//PARALAX EFFECT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for (let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
}, false)

// TABLE FILTER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            if (tr[i].id != 'stable1' && tr[i].id != 'stable2') { tr[i].style.display = "none"; }
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<< COMBINED TABLE JS CODE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ASSIGNMENTS PER COURSE
// TABLE INITIATION
var CounterAC = 1;
// INITIALISE TABLE
$(document).ready(function () {
    // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
    $.get('courses.html', function (result) {
        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
        $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
        $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
    });


    // Get Assignments and Courses from the expected pages and place them to out table
    $.get('asses.html', function (result) {
        var AssTitle1 = $(result).find('#1').find('td').eq('1').text();
        var AssTitle2 = $(result).find('#2').find('td').eq('1').text();
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            $("#myTableC tbody").append("<tr id='" + (CounterAC + 1) + "'><td> " + (CounterAC + 1) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableC tbody").append("<tr id='" + (CounterAC + 2) + "'><td> " + (CounterAC + 2) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
        });
    });

    // DELETE ROW
    $(document).on("click", ".btnDelete", function () {
        $(this).closest('tr').fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false;
    });
});

// REFRESH TABLE
// When the user clicks the +ADD, open the modal 
$("#btnRefresh").on({
    'click': function () {
        $("td").remove();
        // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
            $("#myTableC tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
        });

        // Get Assignments and Courses from the expected pages and place them to out table
        $.get('asses.html', function (result) {
            var AssTitle1 = $(result).find('#1').find('td').eq('1').text();
            var AssTitle2 = $(result).find('#2').find('td').eq('1').text();
            $.get('courses.html', function (result) {
                var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
                var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
                $("#myTableC tbody").append("<tr id='" + (CounterAC) + "'><td> " + (CounterAC) + " </td><td>" + AssTitle1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
                $("#myTableC tbody").append("<tr id='" + (CounterAC + 1) + "'><td> " + (CounterAC + 1) + " </td><td>" + AssTitle2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</il> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            });
        });
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
    $.get('courses.html', function (result) {
        var currTitle1 = $(result).find('#1').find('td').eq('1').text();
        var currTitle2 = $(result).find('#2').find('td').eq('1').text();

        $("#ModalFormEditC").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDAC + "</span></fieldset>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + currTitle1 + "<input type='checkbox' name='course' value='" + currTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + currTitle2 + "<input type='checkbox' name='course' value='" + currTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDAC + "' ></form></div></div>"
        );

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
// END



// STUDENT PER COURSE           
// TABLE INITIATION
var CounterSC = 1;
// INITIALISE TABLE
$(document).ready(function () {
    // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
    $.get('courses.html', function (result) {
        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
        $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
        $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
    });


    // Get Students and Courses from the expected pages and place them to out table
    $.get('students.html', function (result) {
        var StuFirstName1 = $(result).find('#1').find('td').eq('2').text();
        var StuFirstName2 = $(result).find('#2').find('td').eq('2').text();
        var StuLastName1 = $(result).find('#1').find('td').eq('3').text();
        var StuLastName2 = $(result).find('#2').find('td').eq('3').text();
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            $("#myTableS tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableS tbody").append("<tr id='" + (CounterSC + 2) + "'><td> " + (CounterSC + 2) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
        });
    });

    // DELETE ROW
    $(document).on("click", ".btnDelete", function () {
        $(this).closest('tr').fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false;
    });
});

// REFRESH TABLE
// When the user clicks the +ADD, open the modal 
$("#btnRefresh").on({
    'click': function () {
        $("td").remove();
        // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
            $("#myTableS tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
        });

        // Get Assignments and Courses from the expected pages and place them to out table
        $.get('students.html', function (result) {
            var StuFirstName1 = $(result).find('#1').find('td').eq('2').text();
            var StuFirstName2 = $(result).find('#2').find('td').eq('2').text();
            var StuLastName1 = $(result).find('#1').find('td').eq('3').text();
            var StuLastName2 = $(result).find('#2').find('td').eq('3').text();
            $.get('courses.html', function (result) {
                var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
                var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
                $("#myTableS tbody").append("<tr id='" + (CounterSC) + "'><td> " + (CounterSC) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
                $("#myTableS tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            });
        });
    }
});

// GET MODAL FOR EDIT
var modalEdit = $("#ModalFormEditS");

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

    // Get the Courses from the respective page
    $.get('courses.html', function (result) {
        var currTitle1 = $(result).find('#1').find('td').eq('1').text();
        var currTitle2 = $(result).find('#2').find('td').eq('1').text();

        $("#ModalFormEditS").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDSC + "</span></fieldset>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + currTitle1 + "<input type='checkbox' name='course' value='" + currTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + currTitle2 + "<input type='checkbox' name='course' value='" + currTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDSC + "' ></form></div></div>"
        );

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
        var IDSC = $(this).val();

        //find the specific 'tr' that has an id of.. reset the values
        $("#myTableS tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('0').text("");
        $("#myTableS tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('1').text("");

        //get the input values into an Array
        var chosenCourses = [];
        $.each($("input[name='course']:checked"), function () {
            chosenCourses.push($(this).val());
        });

        //find the specific 'tr' that has an id of.. and look for the corresponding 'li' to change
        $("#myTableS tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('0').text(chosenCourses[0]);
        $("#myTableS tbody").find("tr#" + IDSC).find('td').find('ol').find('li').eq('1').text(chosenCourses[1]);

        $(modalEdit).fadeTo(400, 0, function () {
            $(modalEdit).css("display", "none");
        });
    });
});
// END



// TRAINERS PER COURSE          
// TABLE INITIATION
var CounterTC = 1;
// INITIALISE TABLE
$(document).ready(function () {
    // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
    $.get('courses.html', function (result) {
        var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
        var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
        $("#myTableT tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
        $("#myTableT tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
    });


    // Get Assignments and Courses from the expected pages and place them to out table
    $.get('trainers.html', function (result) {
        var trainFirstName1 = $(result).find('#1').find('td').eq('2').text();
        var trainFirstName2 = $(result).find('#2').find('td').eq('2').text();
        var trainLastName1 = $(result).find('#1').find('td').eq('3').text();
        var trainLastName2 = $(result).find('#2').find('td').eq('3').text();
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            $("#myTableT tbody").append("<tr id='" + (CounterTC + 1) + "'><td> " + (CounterTC + 1) + " </td><td>" + trainFirstName1 + "</td><td>" + trainLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            $("#myTableT tbody").append("<tr id='" + (CounterTC + 2) + "'><td> " + (CounterTC + 2) + " </td><td>" + trainFirstName2 + "</td><td>" + trainLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
        });
    });

    // DELETE ROW
    $(document).on("click", ".btnDelete", function () {
        $(this).closest('tr').fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false;
    });
});

// REFRESH TABLE
// When the user clicks the +ADD, open the modal 
$("#btnRefresh").on({
    'click': function () {
        $("td").remove();
        // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
        $.get('courses.html', function (result) {
            var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
            $("#myTableT tbody").find("tr").find('td').find('ol').find('li').eq('0').text(CourseTitle1);
            $("#myTableT tbody").find("tr").find('td').find('ol').find('li').eq('1').text(CourseTitle2);
        });

        // Get Assignments and Courses from the expected pages and place them to out table
        $.get('trainers.html', function (result) {
            var trainFirstName1 = $(result).find('#1').find('td').eq('2').text();
            var trainFirstName2 = $(result).find('#2').find('td').eq('2').text();
            var trainLastName1 = $(result).find('#1').find('td').eq('3').text();
            var trainLastName2 = $(result).find('#2').find('td').eq('3').text();
            $.get('courses.html', function (result) {
                var CourseTitle1 = $(result).find('#1').find('td').eq('1').text();
                var CourseTitle2 = $(result).find('#2').find('td').eq('1').text();
                $("#myTableT tbody").append("<tr id='" + (CounterTC) + "'><td> " + (CounterTC) + " </td><td>" + trainFirstName1 + "</td><td>" + trainLastName1 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
                $("#myTableT tbody").append("<tr id='" + (CounterTC + 1) + "'><td> " + (CounterTC + 1) + " </td><td>" + trainFirstName2 + "</td><td>" + trainLastName2 + "</td><td><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
            });
        });
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
    var IDTC = $(this).parents('tr').find('td:nth-child(1)').text();

    // Get the Courses from the respective page
    $.get('courses.html', function (result) {
        var currTitle1 = $(result).find('#1').find('td').eq('1').text();
        var currTitle2 = $(result).find('#2').find('td').eq('1').text();

        $("#ModalFormEditT").html(
            "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
            + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDTC + "</span></fieldset>"
            + "<fieldset>"
            + "<label class='container' for='course1'>" + currTitle1 + "<input type='checkbox' name='course' value='" + currTitle1 + "' id='course1'><span class='checkmark'></span></label>"
            + "<label class='container' for='course2'>" + currTitle2 + "<input type='checkbox' name='course' value='" + currTitle2 + "' id='course2'><span class='checkmark'></span></label>"
            + "</fieldset>"
            + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDTC + "' ></form></div></div>"
        );

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
        var IDTC = $(this).val();

        //find the specific 'tr' that has an id of.. reset the values
        $("#myTableT tbody").find("tr#" + IDTC).find('td').find('ol').find('li').eq('0').text("");
        $("#myTableT tbody").find("tr#" + IDTC).find('td').find('ol').find('li').eq('1').text("");

        //get the input values into an Array
        var chosenCourses = [];
        $.each($("input[name='course']:checked"), function () {
            chosenCourses.push($(this).val());
        });

        //find the specific 'tr' that has an id of.. and look for the corresponding 'li' to change
        $("#myTableT tbody").find("tr#" + IDTC).find('td').find('ol').find('li').eq('0').text(chosenCourses[0]);
        $("#myTableT tbody").find("tr#" + IDTC).find('td').find('ol').find('li').eq('1').text(chosenCourses[1]);

        $(modalEdit).fadeTo(400, 0, function () {
            $(modalEdit).css("display", "none");
        });
    });
});
// END

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// EXTRA COMBINATION

// STUDENTS PER ASSIGNMENTS PER COURSE         

// TABLE INITIATION
var CounterTC = 1;
// INITIALISE TABLE
$(document).ready(function () {
    // Get the Courses/Assignments from the respective pages and place them to the existing table row no.1

    // Assignments
    $.get('asses.html', function (result1) {
        var AssTitle1 = $(result1).find('#1').find('td').eq('1').text();
        var AssTitle2 = $(result1).find('#2').find('td').eq('1').text();
        $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('0').text(AssTitle1);
        $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('1').text(AssTitle2);
    })

    // Courses
    $.get('courses.html', function (result2) {
        var CourseTitle1 = $(result2).find('#1').find('td').eq('1').text();
        var CourseTitle2 = $(result2).find('#2').find('td').eq('1').text();
        $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('0').text(CourseTitle1);
        $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('1').text(CourseTitle2);
    });


    // Get Students and Assignments and Courses from the expected pages and place them to out table
    $.get('students.html', function (result3) {
        var StuFirstName1 = $(result3).find('#1').find('td').eq('2').text();
        var StuFirstName2 = $(result3).find('#2').find('td').eq('2').text();
        var StuLastName1 = $(result3).find('#1').find('td').eq('3').text();
        var StuLastName2 = $(result3).find('#2').find('td').eq('3').text();

        $.get('courses.html', function (result4) {
            var CourseTitle1 = $(result4).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result4).find('#2').find('td').eq('1').text();

            $.get('asses.html', function (result5) {
                var AssTitle1 = $(result5).find('#1').find('td').eq('1').text();
                var AssTitle2 = $(result5).find('#2').find('td').eq('1').text();

                $("#myTableASC tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><br><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
                $("#myTableASC tbody").append("<tr id='" + (CounterSC + 2) + "'><td> " + (CounterSC + 2) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><br><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");

            });
        });
    });

    // DELETE ROW
    $(document).on("click", ".btnDelete", function () {
        $(this).closest('tr').fadeTo(400, 0, function () {
            $(this).remove();
        });
        return false;
    });
});

// REFRESH TABLE
// When the user clicks the +ADD, open the modal 
$("#btnRefresh").on({
    'click': function () {
        $("td").remove();
        // Get the Courses from the 'page:Courses' and place them to the existing table row no.1
        // Assignments
        $.get('asses.html', function (result1) {
            var AssTitle1 = $(result1).find('#1').find('td').eq('1').text();
            var AssTitle2 = $(result1).find('#2').find('td').eq('1').text();
            $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('0').text(AssTitle1);
            $("#myTableASC tbody").find("tr").find('#getass').find('ol').find('li').eq('1').text(AssTitle2);
        })

        // Courses
        $.get('courses.html', function (result2) {
            var CourseTitle1 = $(result2).find('#1').find('td').eq('1').text();
            var CourseTitle2 = $(result2).find('#2').find('td').eq('1').text();
            $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('0').text(CourseTitle1);
            $("#myTableASC tbody").find("tr").find('#getcou').find('ol').find('li').eq('1').text(CourseTitle2);
        });

        // Get Assignments and Courses from the expected pages and place them to out table
        $.get('students.html', function (result3) {
            var StuFirstName1 = $(result3).find('#1').find('td').eq('2').text();
            var StuFirstName2 = $(result3).find('#2').find('td').eq('2').text();
            var StuLastName1 = $(result3).find('#1').find('td').eq('3').text();
            var StuLastName2 = $(result3).find('#2').find('td').eq('3').text();

            $.get('courses.html', function (result4) {
                var CourseTitle1 = $(result4).find('#1').find('td').eq('1').text();
                var CourseTitle2 = $(result4).find('#2').find('td').eq('1').text();

                $.get('asses.html', function (result5) {
                    var AssTitle1 = $(result5).find('#1').find('td').eq('1').text();
                    var AssTitle2 = $(result5).find('#2').find('td').eq('1').text();

                    $("#myTableASC tbody").append("<tr id='" + (CounterSC) + "'><td> " + (CounterSC) + " </td><td>" + StuFirstName1 + "</td><td>" + StuLastName1 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><br><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");
                    $("#myTableASC tbody").append("<tr id='" + (CounterSC + 1) + "'><td> " + (CounterSC + 1) + " </td><td>" + StuFirstName2 + "</td><td>" + StuLastName2 + "</td><td id='getass'><ol> <li>" + AssTitle1 + "</li><br><li>" + AssTitle2 + "</li> </ol></td><td id='getcou'><ol> <li>" + CourseTitle1 + "</li><br><li>" + CourseTitle2 + "</li> </ol></td><td><img class='btnDelete' src='Images/delete.png'/><img class='btnEdit' src='Images/edit.png'/></td></tr>");

                });
            });
        });
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

    // Get the Courses from the respective page
    $.get('courses.html', function (result6) {
        var currCTitle1 = $(result6).find('#1').find('td').eq('1').text();
        var currCTitle2 = $(result6).find('#2').find('td').eq('1').text();

        $.get('asses.html', function (result7) {
            var currATitle1 = $(result7).find('#1').find('td').eq('1').text();
            var currATitle2 = $(result7).find('#2').find('td').eq('1').text();

            $("#ModalFormEditASC").html(
                "<div class='modal-content'><div class='modal-header'><span class='close'>&times;</span><h2>Edit Form</h2></div>"
                + "<div class='modal-body'><form action='/' method='get'><fieldset><span id='rowID'> ID: " + IDASC + "</span></fieldset>"
                + "<p> Assignments </p>"
                + "<fieldset>"
                + "<label class='container' for='ass1'>" + currATitle1 + "<input type='checkbox' name='assignment' value='" + currATitle1 + "' id='ass1'><span class='checkmark'></span></label>"
                + "<label class='container' for='ass2'>" + currATitle2 + "<input type='checkbox' name='assignment' value='" + currATitle2 + "' id='ass2'><span class='checkmark'></span></label>"
                + "</fieldset>"
                + "<p> Courses </p>"
                + "<fieldset>"
                + "<label class='container' for='course1'>" + currCTitle1 + "<input type='checkbox' name='course' value='" + currCTitle1 + "' id='course1'><span class='checkmark'></span></label>"
                + "<label class='container' for='course2'>" + currCTitle2 + "<input type='checkbox' name='course' value='" + currCTitle2 + "' id='course2'><span class='checkmark'></span></label>"
                + "</fieldset>"
                + "<input type='button' class='btnSaveEdit' name='Submit' value='" + IDASC + "' ></form></div></div>"
            );
        });
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
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getcou').find('ol').find('li').eq('0').text(chosenCourses[0]);
        $("#myTableASC tbody").find("tr#" + IDASC).find('#getcou').find('ol').find('li').eq('1').text(chosenCourses[1]);

        $(modalEdit).fadeTo(400, 0, function () {
            $(modalEdit).css("display", "none");
        });
    });
});
// END


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





