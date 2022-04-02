// What is the diffrence b/w "null" and "undefined" ?

// ==============================================================
// Undefined
// When a variable has been declared but has not yet been assigned a value, then "JS by default" assign that varible a value of undefined.
// In arthematic operations, undefined gives result as "NaN";

let a;
console.log(typeof(a));         // Output: 'undefined'

console.log(a + 1);             // Output: 'NaN'


// ===============================================================
// null
// It means empty. Meaning this variable has no value. And "null" is object in JS and never autmatically assigned to variables. We assign 'null' value programmatically.
// In arthematic operations, null get converted to 0
// Even though null is defined as primitive data type, we can see "null acts like object---becoz it's a bug in JS". And can't be fixed that easily.

let b = null;
console.log(typeof(b));         // Output: 'object'

console.log(b + 1);             // Output: 1