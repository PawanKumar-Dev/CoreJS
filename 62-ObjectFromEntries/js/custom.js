// With ES6, Object.entries() method we can transform an object into an array.
// But about opposite --- that's where Object.fromEntries() methods comes in.

// ES2019 introduced the Object.fromEntries() method converts an array into an object.

// =================================================================
let person = {
  fname: "Adam",
  lname: "Jenson",
  company: "Sarif Industries"
}

// Output: [['fname', 'Adam'], ['lname', 'Jenson'], ['company', 'Sarif Industries']]
let objtoarr = Object.entries(person);


// Now we can convert this array into object
let arrtoobj = Object.fromEntries(objtoarr);
console.log(arrtoobj);