let thermoH = document.getElementById("thermo");

thermoH.style.color = "#7FFF00";
thermoH.innerHTML = "&#xf2cb;";

const riseTempAnime = () => {
  setTimeout(() => {
    thermoH.style.color = "greenyellow";
    thermoH.innerHTML = "&#xf2ca;";
  }, 1000);
  
  setTimeout(() => {
    thermoH.style.color = "yellow";
    thermoH.innerHTML = "&#xf2c9;";
  }, 2000);
  
  setTimeout(() => {
    thermoH.style.color = "orange";
    thermoH.innerHTML = "&#xf2c8;";
  }, 3000);
  
  setTimeout(() => {
    thermoH.style.color = "red";
    thermoH.innerHTML = "&#xf2c7;";
  }, 4000);
  
  setTimeout(() => {    
    thermoH.innerHTML = "&#xf2c7;";
  }, 5000);
}

// Loading First time
riseTempAnime();

// Repeat after time limit
setInterval(() => {
  riseTempAnime();
}, 5000);