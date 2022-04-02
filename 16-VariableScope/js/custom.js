// Scope is the availability of variables and functions in your parts of code.
// Variable has 2 types of scope: "Global Scope" and "Local Scope"

// ===============================
// Global Scope
// ===============================
// A variable declared "outside of function" is a global scope variable.
// Means this variable can be "used anywhere" in the code.
// If variable is used without declaring, that variable automatically becomes a global variable.

var a = 'hello';

function writeFunc(){ 
  console.log(a);
}

writeFunc();

// =========================================
// Problem with Global Variable is they can be changed inside a function.
// And this can cause unknown outcome.

function changeVariable() {
  a = 56;
}

// Gives "undefined" since we changed value inside function
console.log(changeVariable());


// ===========================================
// Local Scope
// ===========================================
// Variable can have local scope, i.e it can only be accessed within a function.
let str1 = "Hello";

function localScopeVariable() {
  let str2 = " World";
  console.log(str1 + str2);
}

localScopeVariable();
// Error: str2 is not defined. Happens becoz of str2 being local scope
console.log(str1 + str2);