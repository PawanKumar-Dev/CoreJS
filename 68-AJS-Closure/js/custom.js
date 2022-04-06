// A closure is a function in 'inner scope' that references variables in 'outer scope'.
// Closure preserves the outer scope inside its inner scope.
// And closure are created everytime a function is created.

// Its concept is pretty similar to lexical scope.
// Even we can say Closure is combination of a function and the lexical environment within which that function is declared. 

const outerFunction = (a) => {
  let b = 10;
  const innerFunction = () => {
    let sum = a + b;
    console.log(sum);
  }

  return innerFunction;
}

outerFunction(4);

// Showing how an inner function is using closure to keep data of outer function available to itself
console.dir(outerFunction(4));