// =================================
// How JS Works
// =================================
// JS works in two main phases: creation phase and execution phase


// =================================
// Hoisting
// =================================
// Hositing is mechanism where 'variables' and 'functions' declarations are moved to the top of their scope before the code is executed.

// Only "var" declared variable can be hoisted.

console.log(myName);
var myName;
myName = "Pawan";

// Output: 'undefined' --> this happens becoz behind the scene our code is executed:
// 1. var myName = undefined;
// 2. console.log(myName);
// 3. myName = "Pawan";

// As we can see our execution phase moves our 'var' declareation to the top.
// Thats why we get undefined instead of error.

// =================================
// Note: Hoisted can lead to unexpected errors, and is not recommended.
// Note: Since ES6(ES2015), use keyword such as 'let' and 'const' instead of 'var'--- has descouraged the hosisting.