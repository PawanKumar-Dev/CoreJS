// All Variables in JS can be classified in 8 data types:

/*
1) String
2) Number
3) BigInt
4) Boolean
5) undefined
6) null
7) Symbol
8) Object
*/

// String is used to store text. In JavaScript, strings are surrounded by quotes: single, double or backticks
// Note: backticks are more used when we combine string and variable together.
// e.g: `The names are ${name} and ${name1}`;

var single = 'Hello';
var double = "Hello";
var backticks = `Hello`;

console.log(single);
console.log(double);
console.log(backticks);


// ==========================================
// Number stores our - integer and floating no. including decimals and exponentials.
// Note: +Infinity, -Infinity, and NaN(not a number) are also part of Numbers. 
var number1 = 3;
var number2 = 3.433;
var number3 = 3e5       // 3 * 10^5

console.log(number1);
console.log(number2);
console.log(number3);

var returnNanValue = "abc"/2;
console.log(returnNanValue);


// ==========================================
// In JS, numbers only represent numbers less than (2 (power 53) - 1) and more than -((power 53) - 1).
// To use a larger number than that, we use the "BigInt" data type.
// A "BigInt" no. is created by appending "n" to the end of an int. 
// Note: BigInt is new and is not supported by many browsers(including Safari)

var bigintdata = 900719925124740998n;


// ==========================================
// "Boolean" data type are logical entities. Represented by: true or false

var dataWithBoolean = true;


// ==========================================
// "Undefined" data type represents value that "is not assigned".
// Note: Even though you can, it's recommended not to explicitly assign undefined to a variable. Instead we use null in those cases

var anotherVariable;
var undefinedVariable = undefined; // Not Recommended


// ===========================================
// "null" is a special value that represents empty or unknown value.
// Note: "null" data type is not same as NULL or Null. (Remember JS is case-sensitive)

var data = null;  // Means it's empty


// =============================================
// "Symbol": data type was introduced in ES2015.
// Symbol is an immutable primitive value that is unique.

var a = Symbol('hello');
var b = Symbol('hello');

// Even though they hold string 'hello'. They are unique values becoz of Symbol
if (a == b) {
  console.log(true);
} else {
  console.log(false);
}


// ===============================================
// Object: It's a complex data type that store collections of data.

var obj = {
  name: "pawan",
  age: 26
};

console.log(obj);


// =================
// Spcl Note: typeof() function in JS return the data type of variable.
console.log(typeof(obj));