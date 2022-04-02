// Location Object is part of "Window object".
// Accessing window object
console.log(window);


// Accessing Location object
console.log(window.location);

// Window Location Hostname(tells the hostname of current page)
document.querySelector("#hostname").innerHTML = window.location.hostname;

// Window Location Href(tells the current url of current page)
document.querySelector("#href").innerHTML = window.location.href;

// Window Location protocol(tells the current url of protocol)
document.querySelector("#protocol").innerHTML = window.location.protocol;


// Window assign to change url
function myfunc() { 
  window.location.assign("http://localhost/Javascript_basics/30-LocationObject/anotherpage.html");
}