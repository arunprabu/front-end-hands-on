// Rest params in Ts
function add(x: number, ...z: number[]): void  { 
  console.log(z);
}
add(10, 20, 30, 40, 50);


// Optional Params and fn with default param
function multiply( a: number, b:number, c?: number = 1): number {
  return a * b * c;
}

let output = multiply(1, 2); // 2 will be the output

console.log(output);