function My_Second_Function() {              // defining a function and naming it
    var str = "This text is blue!";        //defining a vaariable and giving it a
                                            //string value
    var result = str.fontcolor("blue");    //using the fontcolor method on str variable

    document.getElementById("Blue_Text").innerHTML = result;   //putting the value of
                                                            //result into HTML element with "Green_Text" id
}

function myFunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}