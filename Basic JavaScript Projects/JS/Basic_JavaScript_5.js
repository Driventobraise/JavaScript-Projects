document.write(typeof "word" + "<br>");      //using typeof operator

document.write(typeof 3 + "<br>");           //using typeof operator

document.write(2E310 + "<br>");              //display infinity

document.write(-3E310 + "<br>");             //display -infinity

document.write(10>5);               // Boolean Logic True

document.write(10<2);               //Boolean Logic False

console.log(2+5);                           // console.log function
console.log(10<2);                          //console.log Boolean logic False
document.write("7" + 11);                   // Demonstrating coercion
document.write(10==10 );                     //using equal to operator true
document.write(10==2);                      //using equal to operator false


function my_Function1() {                //defining function
    document.getElementById("Test1").innerHTML = 0/0;        //testing NaN
}

function my_Function2() {                //defining function
    document.getElementById("Test2").innerHTML = isNaN('This is a string');         //testing NaN
}

function my_Function3() {                //defining function
    document.getElementById("Test3").innerHTML = isNaN('007');        //testing NaN
}

function my_Function4() {                   //Defining function
    x = 10
    y = 10
    document.getElementById("Test4").innerHTML = (x===y) //utilizing tripple equal to check data
}

function my_Function5() {                   //Defining function
    x = "10"
    y = 12
    document.getElementById("Test5").innerHTML = (x===y) //utilizing tripple equal to check data
}

function my_Function6() {                   //Defining function
    x = "10"
    y = 10
    document.getElementById("Test6").innerHTML = (x===y) //utilizing tripple equal to check data
}

function my_Function7() {                   //Defining function
    x = "word"
    y = "not same"
    document.getElementById("Test7").innerHTML = (x===y) //utilizing tripple equal to check data
}

function and_Function () {
    document.getElementById("Test8").innerHTML = document.write(6>4 && 8>4), document.write(6<4 && 8>4);  //utilizing AND operator to display true and fasle
}

function or_Function() {
    document.getElementById("Test9").innerHTML = document.write(6>9 || 6>5), document.write(6>9 || 6<4); //utilizing OR operator to display true and false
}

function not_Function1() {
    document.getElementById("Test10").innerHTML= !(30>15);                  //utilizing NOT operator to display false
}

function not_Function2() {
    document.getElementById("Test11").innerHTML= !(5>15);                   //utilizing NOT operator to display true
}

