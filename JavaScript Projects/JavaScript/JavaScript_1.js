function Animal_Function() {                                        //defining function.
    var Animal_Output;                                              //creating var to return function.
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great choice!";
    switch(Animals) {                                               //utilizing switch case.
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Llama":
            Animal_Output = "Llama" + Animal_String;
        break;
        case "Okapi":
            Animal_Output = "Okapi" + Animal_String;
        break;
        case "Manned Wolf":
            Animal_Output = "Manned Wolf" + Animal_String;
        break;
        case "Liger":
            Animal_Output = "Liger" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an Animal name exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;            //returning result of user input.
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");  //utilizing getelementsbyclassname instead of id.
    A[0].innerHTML = "The text has changed";       //set index of variable A to 0 to display the first element with the class"click".
}

//using javascript to draw a circle.
var C = document.getElementById("ID_Name");
var ctx = C.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
//adding linear gradient.
var C = document.getElementById("ID_Name1");
var ctx = C.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
//fill with gradient.
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);