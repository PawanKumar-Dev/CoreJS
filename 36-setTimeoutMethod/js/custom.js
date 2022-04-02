// In JS, setTimeout() is a method of "timing events".

// setTimeout() is used for executing a code block only once and with a time interval delay.
// Unlike setInterval() which is executes time and time again. setTimeout() runs only once. But with time delay.
// clearInterval() can stop this execution just like in case of setInterval()

// Syntax: setTimeout(function, timeout);

// With this we execute a greetUser function after delay of 5 seconds
setTimeout(greetUser, 5000);

function greetUser() {
  document.querySelector("h2").textContent = "Hey! User. Sorry for delayed greetings.";
}