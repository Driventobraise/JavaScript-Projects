function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML= addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Math2").innerHTML= Subtraction
}

function multiplication() {
    var simple_Mult= 6*8;
    document.getElementById("Math3").innerHTML=simple_Mult
}

function division() {
    var simple_Div= 48/6;
    document.getElementById("Math4").innerHTML=simple_Div
}

function more_Math() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math5").innerHTML= simple_Math;
}

function modulus_Operator() {
    var simple_math1 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of;" + simple_math1;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function inc_Operator() {
    var y = 5;
    y++;
    document.getElementById("Math8").innerHTML = y;
}

function dec_Operator() {
    var z = 5;
    z--;
    document.getElementById("Math9").innerHTML = z;
}

function rollD20() {                        //math object method and math random
    var d20Result = document.getElementById("d20Result");
    var d20 = Math.floor(Math.random()*20+1);
      d20Result.innerHTML = d20;
    }