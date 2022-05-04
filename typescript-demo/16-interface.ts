interface IEmployee{
  empId: number; 
  name: string;
  city: string;
  zip?: number;
  phone?: number | string;
}

let employeeData1: IEmployee = {
  empId: 12424,
  name: "John",
  city: "Chennai",
  phone: "+91-345324434"
}

let employeeData2: IEmployee = {
  empId: 111,
  name: "Peter",
  city: "Sydney",
  zip: 322332
}


/*
An Interface is a structure which acts as a contract in our application. 
It defines the syntax for classes to follow, means a class which implements an 
interface is bound to implement all its members.

 We cannot instantiate the interface, but it can be referenced by the class object 
 that implements it. The TypeScript compiler uses interface for type-checking 
 (also known as "duck typing" or "structural subtyping") whether the object has a 
 specific structure or not.

*/

