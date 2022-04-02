// An array is special type "object" that can store multiple values at once.
// This type of array creation is called "literals".
const fruits = ['Apple', 'Grapes', 'Banana', 'Mango', 'Orange'];
console.log(fruits);
console.log(typeof(fruits));

// =========================================================
// You can store diffrent data types inside a single as well

const mixArray = ['string', 26, function t() {console.log("t")}, [1, 2, 3] ];
console.log(mixArray);


// ================================================
// Array are values are accessed via there index position. which start from 0.
console.log(fruits[0]);
console.log(fruits[1]);