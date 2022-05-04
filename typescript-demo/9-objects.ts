// Now Let's create object with type explicitly
let profile1: {} = {
  name: "Ronaldo",
  role: "forward"
}
console.log(profile1);

// leaving it empty without any properties  will throw an error. 
// so the properties with values should be assigned.
// let profile2: { name: string , exp: number } = { 
// }

//The following will work as it has properties as per the blueprint
let profile3: { name: string, exp: number } = { 
  name: "Arun",
  exp: 12
} 
