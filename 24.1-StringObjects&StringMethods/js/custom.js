// We all know string data type -- which also primitive data type:
let str = "hello";
console.log(typeof(str));

// =====================================================================
// But if try length property on our primitive string data type, we get results at "5" in this case
// Why?
// Becoz JS automatically converts between string primitives to String objects.And Hence you can call helper methods of the String object on string primitive.

console.log(str.length);
console.log(str.charAt(2));       // Invoking String Methods


//==============================================================
// You can search for character or words inside a string using indexOf() method
// It returns the index position of first occurence only.
// If not found -1 is returned

// Note: indexOf() does count you whitespace as valid string. Remember that.

let str2 = "Just another random string to read for you";
console.log(str2.indexOf("to"));

