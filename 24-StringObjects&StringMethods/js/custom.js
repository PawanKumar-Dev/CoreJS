// We all know string data type -- which also primitive data type:
let str = "hello";
console.log(typeof(str));

// But if try length property on our primitive string data type, we get results at "5" in this case
// Why?
// Becoz JS automatically converts between string primitives to String objects.And Hence you can call helper methods of the String object on string primitive.

console.log(str.length);
console.log(str.charAt(2));       // Invoking String Methods