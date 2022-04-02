// Diffrence b/w Math.round() vs Math.ceil() vs Math.floor()  --- is famous Interview Question

// ===============================
// Math.round() : round up our decimal numbers on basis of halfway. i.e. 0.5 value
// Meaning any value "below .5 remains the same"
// But any value "above or equal to .5 adds 1"

console.log(Math.round(4.7));         // Output: 5
console.log(Math.round(4.4));         // Output: 4
console.log(Math.round(4.5));         // Output: 5


console.log("-------------------");

// ================================
// Math.ceil(): "round up" your decimal number to nearest int value possible. Not on basis of .5
console.log(Math.ceil(4.7));         // Output: 5
console.log(Math.ceil(4.1));         // Output: 5
console.log(Math.ceil(4.5));         // Output: 5


console.log("-------------------");
// ================================
// Math.floor(): "round down" your decimal number to nearest int value possible.
console.log(Math.floor(4.7));         // Output: 4
console.log(Math.floor(4.1));         // Output: 4
console.log(Math.floor(4.5));         // Output: 4