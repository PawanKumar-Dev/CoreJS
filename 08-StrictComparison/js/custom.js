// Strict Comparison refers to === operator
// Unlike comparison operator ==, this one check whether the operands are equal and of "same data type"

// Give true. Even though "3" is string and other 3 is number
// This happens becoz == only compare its value not data type
console.log("3" == 3);


// Strict Operator usage
// Gives false now
console.log("3" === 3);