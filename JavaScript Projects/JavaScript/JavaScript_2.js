//validation form 
function validateForm() {
    var x = document.forms["myForm"]["firstname"]["lastname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
   }