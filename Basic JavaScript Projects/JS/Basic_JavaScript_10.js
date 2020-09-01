function Call_Loop() {                  //creating function that counts to 10 using a loop.
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_Function() {            //utlizing the Length propert on a string.
    var str = "I am Learning!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Didgeridoo" ];         //creating array of instruments.
var Content = "";
function for_Loop() {                                                       //creating for loop that parses through the array and prints each element.
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {                                     //creating a function that displays values in my array.
    var Cat_Picture = [];
    Cat_Picture[0] = "eating";
    Cat_Picture[1] = "being a punk";
    Cat_Picture[2] = "balling out of control";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "," + " he is not " + Cat_Picture[1] + "!";  //utlizing get.ElementById method.
}

function constant_Function() {                              //utlizing const.
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "Pink";
    Musical_Instrument.price = "$1200";
    document.getElementById("Constant").innerHTML = "The color of the " + Musical_Instrument.type + " is " + Musical_Instrument.color + "." + "It costs " + Musical_Instrument.price;
}

let x = 1;                  //utilizing console.log to express a let statement.
if (x === 1) {
    let x=2;
    console.log(x)  //expected output:2
}
console.log(x); //expected output:1

function return_Function() {            //creating a function that returns the value of pi when called.
    return Math.PI;
}
document.getElementById("Math").innerHTML = return_Function();

let car = {
    make: "Dodge ",
    model: "Viper. ",
    year: "2021 ",
    color: "black ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }            //utlizing continue statment.
  if(i===8) {break;}                    //utlizing break statment.
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;