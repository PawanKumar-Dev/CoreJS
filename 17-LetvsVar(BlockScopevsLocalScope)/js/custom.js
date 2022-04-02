// "let" keyword create a "Block Scoped variable"
// Meaning "let" variable can only be accessed inside that code block. It can limit functionality to small fragment.

let gStr = "String inside Global Scope with let";

function myFunc(){ 
  let lStr = "String inside Local Scope with let";

  console.log(gStr);
  console.log(lStr);

  if(true) {
    let bStr = "String inside a block code of If statment";
    console.log(bStr);
  }

  console.log(bStr);  // Not accessible since only block scope
}

myFunc();

console.log(gStr);
console.log(lStr); // Local scope variable hence not accessible