var myName = "John";
console.log(myName);
//check this example -- Even when you don't specify the data type the variable has data type mapped to it. This is Implicit Typing
var city = "Chennai"; // TS automatically sets data type for the variable
//city = 44; // error 
console.log(city);
// assigning type like this will work fine without throwing errors
var lastName; // no initial value
lastName = "Peter"; //assigning value
lastName = 1; //assigning another value but of diff data type
console.log(lastName);

