// Spread operator (...) allows us to copy all or part of an existing array or object into another array or object.

// ======================================================================
// Copy an array
const numbersOne = [1, 2, 3];
const numbersTwo = [...numbersOne, 4, 5, 6];

console.log(numbersTwo);      // Output: [1, 2, 3, 4, 5, 6]



// ======================================================================
// Copy an object
var obj1 = {
  name: "Pawan",
  age: 26
}

var obj2 = {
  ...obj1,
  website: "devspecial.online"
}

console.log(obj2);            // Output: {name: 'Pawan', age: 26, website: 'devspecial.online'}