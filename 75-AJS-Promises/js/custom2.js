// In this we use arrow function for Promises

const jokeboxH = document.getElementById('jokebox');
const getNewJokeBtnH = document.getElementById('getNewJokeBtn');

const setHeader = {
  headers : {
    Accept : "application/json"
  }
}

function getJoke() {
  fetch("https://icanhazdadjoke.com/", setHeader)
  .then( (response) => response.json() )
  .then( (data) => {
    console.log(data.joke);
    jokeboxH.innerHTML = data.joke;
  })
  .catch((error) => {
    console.log(`Promise failed becoz: ${error}`);
  });
}

getNewJokeBtnH.addEventListener("click", getJoke);
getJoke();