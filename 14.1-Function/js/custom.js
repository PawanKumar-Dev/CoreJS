// Function is a "code block" that performs a specific task.
// You can declare it once and use it multiple times. Follow the DRY concept.

// A function is declared using "function" keyword.
// Body of function is written within {}.
// To use a function, we need to "call it".

// ==================================
// Function Syntax

function myFunc() {                   // Function Declartion
  console.log("Function running");    // Function Body
}

myFunc();                             // Function Calling


// ======================================
// Function with Parameters
// Parameter is a value that is passed when declaring a function.
// You can pass multiple parameters

function add(a, b) {
  console.log("Addition:"+ (a + b));
}

// when Function is called, the value passed is called "argument"
add(5, 6);
add(10, 3);


// =======================================
// Function Return
// Return statement is used to returns the value to function call.
// If nothing is returned, function returns an "undefined value".
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 6));