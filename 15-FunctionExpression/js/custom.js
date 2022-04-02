// Functions can also be defined as expressions
// And their another variant is "Anonymous function".

// ========================================
// Function Expression
// We use variable to store the function. Hence treated as an expression. And this function is called using variable name.
// Note: In function expression, we are storing our function call inside a variable

function addition (a, b) {
  return a+b;
}

var add = addition(4, 5);

console.log(add);


// ===================================================
// Anonymous Function
// Note: Unlike Function expression, we store our whole function, including its declartion inside a variable.
// Since we don't give this function a name --- we call it anonymous function

var substraction = function(a, b) {
  return a - b;
}

console.log(substraction(5, 6));
