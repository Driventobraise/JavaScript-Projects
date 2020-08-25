var D = "This is an alert";
window.alert(D);

var H = "\"Do you believe this,"+" because I don\'t!\""+"-Me";
document.write(H)

var Family = "The Monks", Dad = "Jess", Mom = "Kate", Pet1 = "Sake", Pet2 = "Pickle";
var Dad = Dad.fontcolor("blue");
var Mom = Mom.fontcolor("red");
var Pet1 = Pet1.fontcolor("yellow");
var Pet2 = Pet2.fontcolor("pink");

document.write(Dad,Mom,Pet1,Pet2)

document.write(3+3);


function My_First_Function() {              // defining a function and naming it
    var str = "This text is green!";        //defining a vaariable and giving it a
                                            //string value
    var result = str.fontcolor("green");    //using the fontcolor method on str variable

    document.getElementById("Green_Text").innerHTML = result;   //putting the value of
                                                            //result into HTML element with "Green_Text" id
}