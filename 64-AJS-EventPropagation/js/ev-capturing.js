let innerHandle1 = document.getElementById("inner1");
let outerHandle1 = document.getElementById("outer1");

innerHandle1.addEventListener('click', palertin, true);
outerHandle1.addEventListener('click', palertout, true);

function palertin() {
  alert("Inner Div Clicked");
}

function palertout() {
  alert("Outer Div Clicked");
}