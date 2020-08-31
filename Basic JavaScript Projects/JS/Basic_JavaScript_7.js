var x = 20;                 //Global variable.
function Add_numbers_1(){           //adding function.
    document.write(20 + x + "<br>")
}
function Add_numbers_2(){
    document.write(x + 100 + "<br>");
}
Add_numbers_1();            //calls results.
Add_numbers_2();

function Add_number_3() {       //local variable.
    var y = 15;
    document.write(30 + y + "<br>")
}
function Add_number_4() {       //undefinded variable to de-bug in browser.
    console.log(25 + y);
}
Add_number_3();
Add_number_4();

function get_Date() {                           //Creating function that utilizes newdate/gethours method
    if (new Date().getHours() < 18) {           //utilizing a conditional statment.
        document.getElementById("Hello").innerHTML= "How are you today?";   //utilizing getElementById method.
    }
}

function myFunction() {                     // Creating a function that changes your greeting message depending on time of day, using if, else and else if.
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good Morning";
    } else if (time <20) {
        greeting = "Good Day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("greetings").innerHTML = greeting;
}

function Party_Function() {                         // Creating function that uses if/else.
    age = document.getElementById("age").value;     //fetches age input.
    if (age >= 21) {                                //if statment checks if age is 21 and above.
        Drink = "You can Party brah!";
    }
    else {                                          //else statment for age outside of parameters.
        Drink = "No Booze for you!"
    }
    document.getElementById("Party").innerHTML = Drink;     // returns message if you can party or not.
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}