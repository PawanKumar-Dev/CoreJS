// Difference bw Synchronus and Asynchronus Javascript
// ======================================================

// Synchronus means things(events or actions) happens in a sequential manners. One after another.
// Even if 1st task is 10 min long and 2nd task is 1min. The 2nd task have to wait for 1st task to complete.
// Asynchronus solves this problems by simultanesly work on multiple tasks. Even if 1st task is not completed and have we spare resources we go ahead with 2nd task.

// Becoz of this Async Nature proves to be more user friendly since it keeps the user engaged.


// ============================================================================================
// Example of Sync Way: They all run one after another

function func1() {
  console.log("Function 1 is running!");
}

function func2() {
  console.log("Function 2 is running");
  func1();
  console.log("Function 2 is running again");
}

func2();



// ============================================================================================
// Example of Async Way.
// Note: setTimeout() is an Async function of Window Object.

function func3() {
  setTimeout(() => {
    console.log("Function 3 is running!");
  }, 2000);
}

function func4() {
  console.log("Function 4 is running");
  func3();
  console.log("Function 4 is running again");
}

func4();
