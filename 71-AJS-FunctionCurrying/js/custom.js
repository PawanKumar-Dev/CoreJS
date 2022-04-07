// Function Currying
// ================
// It's a technique where a function of multiple arguments(--> sum(a, b, c) <--) is transformed into several functions of a single argument but in a sequence( or a nested bunch of anonymous function).


// =================================================
// A normal function with multiple arguments:
function sum(a, b, c) {
  return a + b + c;
}

let data = sum(5, 6, 8);
console.log(data);


// =================================================
// A function currying doing the same thing as above.

// In curry every inner function take an argument and return another function. These returning function would most likely be anonymous. This chain continues till all argument is 'used up.'
// And our most innerfunction is returning the actual data. Becoz of lexical scoping inner functon have access to outer data.

function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}


let add = addition(5)(6)(8);
console.log(add);


// =================================================
// Why:
// 1. Currying helps us avoid passing the same variable again and again.
// 2. Helps us create a higher order function.