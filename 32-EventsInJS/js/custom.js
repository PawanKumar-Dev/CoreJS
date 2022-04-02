// Events are action on webpage that trigger our JS code
// They give our webpage necassary interactivity

// We use event 2 main ways:
// 1. HTML attached Events. e.g. <button onkeypress="myfunc()">Print this section</button>
// 2. AddEventListener using JS e.g. changecolorevent.addEventListener('click', function())


// Different Event are like: onclick, ondblclick, onkeypress etc.

// =====================================================
// Using HTML attached Events
function myfunc() {
  document.querySelector("p").style.backgroundColor = "aqua";
  document.querySelector("body").style.color = "red";
}



// =========================================
// changecolorevent is an id so we can directly access it too
// addEventListener does same things as adding an html attribute of click or keypress etc.

// It takes two arguments:
// 1st: event itself i.e. click or keypress etc
// 2nd: a function that runs a code block

changecolorevent.addEventListener('click', function(){
  console.log("button clicked");
});

changecolorevent2.addEventListener('click', dataLog);

function dataLog() {
  console.log("2nd Button clicked");
}