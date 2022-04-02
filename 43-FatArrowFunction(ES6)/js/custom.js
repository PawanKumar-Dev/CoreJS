// Fat Arrow Functions are introduced in Es6. They are also called arrow functions.

// ===========================================================================
// Normal function is like:
console.log(sum());           // Works just fine

function sum() {
  let a = 10;
  let b = 15;
  return a + b;
}

console.log(sum());



// ===========================================================================
// A Fat Arrow Function(Works pretty similar to anonymous function)
// Another major diffrence b/w Arrow function and Normal function is ---> you cannot call arrow function before you declare it.
// However normal function in JS can be called anywhere, even before they are declared.

// In arrow function, if your code is just 1 one line, then it get return automatically. No need for return keyword usage.

console.log(sub());             // Gives error in case of arrow function

let sub = () => {
  let a = 15;
  let b = 10;
  return a - b;
}

console.log(sub());
