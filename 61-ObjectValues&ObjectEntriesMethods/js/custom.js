// Before ES8 methods of Object Values and Object Entries. If we need to convert object's key or values into array, we need to run for loops.
// But 'Object.values' and 'Object.entries' makes it very easy

let person = {
  fname: "Adam",
  lname: "Jenson",
  company: "Sarif Industries"
}


// ===================================================================
// Object.values
// Gives us the values of object as an array.
// Output:  ['Adam', 'Jenson', 'Sarif Industries']

let personArr = Object.values(person);
console.log(personArr);


// ===================================================================
// Object.entries
// Gives us the keys:value pair of object as an array.
// Output:  [['fname', 'Adam'], ['lname', 'Jenson'], ['company', 'Sarif Industries']]

let personArr2 = Object.entries(person);
console.log(personArr2);