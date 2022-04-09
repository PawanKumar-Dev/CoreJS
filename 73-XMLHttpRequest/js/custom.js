// Element Handle
const countryName = document.getElementById("countryname");
const capital = document.getElementById("capital");
const currency = document.getElementById("currency");
const flag = document.getElementById("flag");

// Sending XMLHttp Request
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/india");
request.send();

// Getting the response back
request.addEventListener('load', function() {
  const data = this.responseText;
  
  let parsedD = JSON.parse(data);
  console.log(parsedD);

  // Injecting Data in HTML
  countryName.innerText = parsedD[0].name.common;
  capital.innerText = parsedD[0].capital;
  currency.innerText = parsedD[0].currencies.INR.name;
  flag.src = parsedD[0].flags.svg;
});