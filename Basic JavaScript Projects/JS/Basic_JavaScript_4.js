function my_Dictionary() {          // defining function namin it
    var Pet = {                     //creatin kvp dictionary
        Species:"Cat",
        Color:"calico",
        Breed:"american short-hair",
        Age:5,
        Sound:"Meow!"
    };
    delete Pet.Age;                 //using a word as an oporator
    document.getElementById("Dictionary1").innerHTML = Pet.Age
    document.getElementById("Dictionary").innerHTML = Pet.Sound
}