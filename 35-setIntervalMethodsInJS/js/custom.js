// In JS, codeblock can be executed in "specified time intervals". And these time intervals are called "timing events".

// To achieve our time interval code execution, JS has mainly 2 methods:
// 1. setInterval()
// 2. setTimeout()

// ================================================================
// In this we focus on setInterval() method:

// toLocaleTimeString() -- gives us the time only in a string from data object.

// Syntax of setInterval()
// It takes two parameters: 1st - function is the code that will run & 2nd - timing is given in milliseconds.
// But in case you need to stop execution of setInterval(), we can do the clearInterval(). Which stops the execution of code.
// 1 second = 1000 milliseconds
// setInterval(func, milliseconds)

// Using the setInterval to call a function at a timing event. It will transform our static clock to dynamic
let clock = setInterval(dynamicClock, 1000);

function dynamicClock() {
  // This show us the Static clock with time
  let time = new Date();
  let localTime = time.toLocaleTimeString();
  document.querySelector("h2").textContent = localTime;
}


// To stop our clock we use the clearInterval
function stopClock() {
  clearInterval(clock);
}

// Summarize in Simple English
// setInterval() method can run a code repeatedly after a set time interval.