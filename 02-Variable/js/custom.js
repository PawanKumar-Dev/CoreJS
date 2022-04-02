// A variable is a storage location which contains some info/data referred to as a value.
// Variable hold your values.

// ================================================================
// Variable in JS are defined(declared) with "var" keyword mainly.
var pawan;

console.log(pawan);  // ---> Gives us undefined. Since we didn't assign any value to it

// ==========================================
// But in newer JS, we can use "let" also
let Raju = 24;

console.log(Raju);

// ===================================================
// Key difference b/w let vs var
/*
1. "var" is older way of defining variables. Support in every browser.
2. "let" is new(introduced in ES6-ES2015). Still not fully supported.

3. "var" is function scoped.
4. "let" is block scoped.
*/

// ============================
// "const" keyword introduced in ES6(ES2015) to create constants.
const qname = "Rani Laxmibai";
console.log(qname);

// ===========================
// Indentifers in JS:
// JavaScript identifiers are the name that we give to variables, objects, functions, arrays, classes, etc.
// We must use a unique name so as to identify them.
// Example pawan is the name we have given to varible and it holds undefined. Hence it is identifier. 