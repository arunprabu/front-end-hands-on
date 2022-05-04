// can capture the type of arguments 
function add(a: number , b: number): number { // return type is number
// some of other possible return types in TS -- all other primitive data types, custom type, any, void, never 
  return a + b ;
}

let total: number = add(10, 20);

console.log(total);


