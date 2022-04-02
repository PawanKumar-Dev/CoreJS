// Type Conversion is process of converting data of one type to another. For e.g: converting "String" to "Number".

// 2 types of type conversion:
// Implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion
// ===================================================================
console.log("3" + 2);   // Prints 32 instead of 5. Since 3 is string.


// ===================================================================
// We can convert these string to Integer using: Number()
console.log(Number("3") + 2);   // Prints 5
// Note: parseInt(), parseFloat(), & Math.floor() can also do this

// ===================================================================
// Other data types to strings, we use: String() or toString()
let a = 4;
let b = 6;

console.log(a+b);                   // Prints "10"
console.log(String(a)+b);           // Prints "46"


// ====================================================================
// Other data types to a Boolean, you use Boolean().