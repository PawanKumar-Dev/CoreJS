// JavaScript Object Notation (JSON) is text-based format used for transmitting data in web applications (e.g., sending some data from the server to the client or vice versa).
// There are mainly 2 methods in JS for dealing with JSON.


// =================================================================
// Convert JSON to JS Object:
// We can convert JSON data into JS Object using "JSON.parse()" function

const jsonData = '{ "name": "John", "age": 22 }';

console.log(JSON.parse(jsonData));


// =================================================================
// Convert JS Object to JSON
// We do it by using JSON.stringfy() function

const jsObj = {
  name: "John",
  age: 22
};

console.log(JSON.stringify(jsObj));