// ======================================
// Function Parameters: These are values that are passed when declaring a function.
// You can pass single or multiple parameters
// example: a, b ----- are our parameters here

function add(a, b) {
  console.log( "Addition:"+ (a + b) );
}

// when Function is called, the value passed is called "argument". They must the same as parameters in number
// Otherwise a mismatch happens and JS throws a error
add(5, 6);
add(10, 3);