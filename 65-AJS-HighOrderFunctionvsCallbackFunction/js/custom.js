// High Order Function: A function that accepts another function as an argument is called HOF. 
// They are described as HOF, since they can have other functions inside them.

// ======================================================================================


// Callback Function: It's the function that is being passed as argument inside another function(which is a HOF).
// It's called "Callback function" becoz another function is calling it at later time.


// =======================================================================================
// Example of Calucaltor

// These are our callback func. Since they are passed inside the calculator func.
const add = (a, b) => {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
}

const multi = (a, b) => {
  return a * b;
}


// This function is our HOF(High Order Function).
// It takes 2 normal number arguments and 1 function as argument
const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
}

let newsum = calculator(14, 17, multi);
console.log(newsum);