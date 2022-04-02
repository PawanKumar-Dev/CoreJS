// JSON is Javascript Object Notation. It's not part of JS. It's a text file format for transfering data to and from server. Just like XML.

// In JavaScript, we can interect with JSON using only the JS Object.
// ===================================================================

// Converting data into JSON
// For this we need our data in JS Object format
// Then to convert it into JSON we use the "JSON.stringfy()" method
let obj = {
  name : "Pawan",
  age: 26
}

let convertedToJson = JSON.stringify(obj);
console.log(convertedToJson);


// ====================================================================
// Similary we can convert JSON data into JS Object
// Remember to wrap the incoming JSON data into ticks (`) before conversion
let recievedJson = `{"name":"Raju","age":19}`;

let convertedToObj = JSON.parse(recievedJson);
console.log(convertedToObj);