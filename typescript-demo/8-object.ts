// Objects - Implicit type
let profile = {
  name: "Arun",
  role: "Trainer",
  skills: ["Angular", "react"]
};

// profile = "Test"; // Error - as type has been set implicitly as Object

// profile = {
//   exp: 12 // Error - only known properties can be set values
// };

// profile.exp = "12"; // Error - only known properties can be set values

profile.role = "Consultant and Trainer"; // will work
