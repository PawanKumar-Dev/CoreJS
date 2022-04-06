// The array destructuring is process which makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// ======================================================
// Old way of assigning value from array to variables(ES5)
// This way is tedious and for long arrays it could be long time too

let arr = [10, 20, 30, 40, 50];

let arr1 = arr[0];
let arr2 = arr[1];

console.log(arr1);                                              // Output: 10


// ===========================================================
// In ES6 array destructuing is introduced
// Sequence in this is everything. Values are assigned by position

let fruits = ["apple", "orange", "mango", "grapes", "guave"];

let [f1, f2, f3, f4, f5] = fruits;
console.log(f3);                                                // Output: mango



// =============================================================
// Object Destructuring works pretty similar to array destructing

let bioData = {
  name: "Pawan",
  profession: "Web Dev",
  website: "devspecial.online",
  hobbies: {
    first: "Games",
    Second: "Coding"
  }
}


// Normal Object destructing
// But here you must provide the same name of variables as the property.

let {name, profession, website} = bioData;
console.log(profession);                                         // Output: Web Dev


// Although you can rename it other value.
let {name: bName, profession: bProf, website: bWeb} = bioData;
console.log(bName);                                              // Output: Pawan


// You can even access nested Object
let {hobbies} = bioData;
console.log(hobbies);                                           // Output: {first: 'Games', Second: 'Coding'}
console.log(hobbies.first);                                     // Output: Games