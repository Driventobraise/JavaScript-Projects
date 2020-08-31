function full_Sentence() {                      //demonstrating concat on a sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into to a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method () {                                  //utilizing the slice method to only display Johnny.
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Function() {                                 //utilizing the toUppercase method.
    var str = "slam dunk!";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function search_Function() {                    //using search method to search for "look".
    var str = "Hey Look at me.";
    var n = str.search("Look");
    document.getElementById("Search").innerHTML = n;
}

function string_Method() {                      //utilizng toString method on numbers.
    var x = 711;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {                   //utlizing precision method.
    var x = 11979.10169776541;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Function() {                     //utilizing toFixed method.
    var num = 7.98374;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

function valueof_Function() {                   //utilizing valueOf method.
    var str = "Hello World!!";
    var res = str.valueOf();
    document.getElementById("valueof").innerHTML = res;
}