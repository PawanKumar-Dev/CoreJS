// Promises
// ================================
// In JS, promise is good way to handle asynchronous operations. It's used to find out if asynchronous operation is successfully completed or not.
// Promises are key to avoid "callback hell".

// A promise may have one of three states: 1.Pending, 2.Fulfilled, 3.Rejected

// A promise starts in pending state. Meaning process is not complete.
// If operation is successful, process ends in fulfilled state. And, if error occurs, process ends in rejected state.

// =======================================================
// fetch() is an alternate to fetch data from servers or api without using XMLhttprequest. But fetch() always returns a promise.

// Get handle on ids
const jokeHandle = document.getElementById("joke");
const getjokeHandle = document.getElementById("getjoke");

// Main function that will fetch our api
function fetchJoke() {

  // We set our http header
  const setHeader = {
    headers: {
      Accept: "application/json"
    }
  }

  // Fetch api hitting the API and returning the Promise.
  // ".then" returns response if fullfilled
  // While ".catch" returns our error if rejected

  fetch('https://icanhazdadjoke.com/', setHeader)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    jokeHandle.innerHTML = data.joke;
  })
  .catch(function(error) {
    console.log(error);
  })
}


// Adding event
getjokeHandle.addEventListener("click", fetchJoke);

fetchJoke();