// In ES6, we can use variables value as dynamic properties inside an object.
// Basiclly [] allow us to inject dynamic keys inside an object.
// These dynamic properties are accesed using the value of variable. "Not the variable itself-- but its value."

let key = "value";

let user = {
  [key]: "Pawan"
};

console.log(user);                    // return the object
console.log(user.key);                // Gives us "undefined"
console.log(user.value);              // Gives "Pawan"