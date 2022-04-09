// Async Await
// ==========================================================
// We use "Async" Keyword with any function it means that func is now asynchronous function. 
// All async function returns a promise.

/*  Syntax
=====================================================================
async function name(parameter1, parameter2, ...paramaterN) {
  // statements
}
*/


// ====================================================================
// "Await" keyword is used inside the async function to wait for asynchronous operation.

/* Syntax:
===================================
let result = await promise;
*/

// =====================================================================
// While using the async function, you can handle errors by using try/catch block.

const boxH = document.getElementById("box");
const btnH = document.getElementById("btn");

setHeader = {
  headers : {
    Accept: "application/json"
  }
}

async function getJoke() {

  let res = await fetch("https://icanhazdadjoke.com/", setHeader);
  let data = await res.json();
  boxH.innerHTML = data.joke;
}

btnH.addEventListener("click", getJoke);
getJoke();


// Benefits of Using async Function
// =============================================
// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.