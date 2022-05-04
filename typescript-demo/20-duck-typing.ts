class Sparrow {
    sound = "cheep!";
}
class Parrot {
    sound = "squawk!";
}
class Duck {
    sound = "quack!";
    swim(){
        console.log("Going for a dip!");
    }
}
var parrot: Parrot = new Sparrow(); // substitutes
var sparrow: Sparrow = new Parrot(); // substitutes
var parrotTwo: Parrot = new Duck();
// var duck: Duck = new Parrot(); // IDE & compiler error
 
console.log("Parrot says: "+ parrot.sound);
console.log("sparrow says: "+ sparrow.sound);
console.log("parrot says: "+ parrotTwo.sound);
