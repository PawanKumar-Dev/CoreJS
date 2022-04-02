// Access and Change CSS of Page with DOM

// Changing single CSS property
document.querySelector("#pid1").style.color = "red";

document.querySelector("#pid2").style.fontSize = "45px";


// Changing multiple CSS properties with setAttribute() method
document.getElementById("pi3").setAttribute("style", "color:green; font-size: 25px; background-color: aqua; padding: 5px;");