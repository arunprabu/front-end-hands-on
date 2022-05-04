function add(a:string, b:string):string; // fn declaration without fn defn

function add(a:number, b:number): number; // fn declaration without fn defn

function add(a: any, b:any): any { // fn declaration with fn defn
  debugger;
  return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 


/* 
In the above example, we have the same function add() with two function declarations and one function 
implementation. The first signature has two parameters of type string, whereas the second signature 
has two parameters of the type number.

The last function should have the function implementation. Since the return type can be either 
string or number as per the first two function declarations, we must use compatible parameters 
and return type as any in the function definition.

Function overloading with different number of parameters and types with same name is not supported.
*/