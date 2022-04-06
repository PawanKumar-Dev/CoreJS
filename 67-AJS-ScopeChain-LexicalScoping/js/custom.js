// Scope: It's a region of the program where a variable can be accessed.

// ==============================================
// Scope chain:
// 1st: When we access variable during function call, it search for local variables. 
// 2nd: If not found, search goes in its outer scope or parent functions’ scope.
// 3rd: Again if not found, search goes to global scope

// This searching for any variable happens along the scope chain happens lexically.

// Meaning any child function can access its parent variable and even the global variable. But vice versa is not true.

let a = "This is Global Variable";

function first() {
  let b = "This is Local Variable of First function";

  function second() {
    let c = "This is Local Variable of Second function";

    // All these are accessible inside the innermost child
    console.log(a);
    console.log(b);
    console.log(c);
  }
  
  console.log(a);
  console.log(b);
  // console.log(c);            --> Doesn't work becoz acc to lexically scoping we can travel scope chain 'top to bottom' not vice versa

  second();
}

first();