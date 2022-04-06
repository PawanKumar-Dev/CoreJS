// ====================================================
// Event Propagtion
// ====================================================
// "Event Propagtion" is a mode which determines the order in which element recieve the event.
// OR
// "Event propagation" is a mechanism that defines how events propagate or travel through the DOM tree to arrive at its target and what happens to it afterward.


// ====================================================
// Two Types of Event Propagtion:
// ====================================================
// 'Event Bubbling' and 'Event Capturing' are two way an event propagation occurs inside our DOM Tree.
// This happens when an event occurs in an element inside another element, and both elements have registered a handle for that event.


// ====================================================
// What is Event Bubbling?
// ====================================================
// 'Event Bubbling' happens from "Bottom" to "Top". Meaning child element event is called first then it propagets toward the Top element. If its parent has event then that one will trigger next. And then next.

// Since its traveling "up" the DOM tree. It's called Bottom-top propagtion also.

// It is the by 'default mode' of event propagtion.

let innerHandle = document.getElementById("inner");
let outerHandle = document.getElementById("outer");

innerHandle.addEventListener('click', popalertin, false);
outerHandle.addEventListener('click', popalertout, false);

function popalertin() {
  alert("Inner Div Clicked");
  // event.stopPropagation();
}

function popalertout() {
  alert("Outer Div Clicked");  
}


// ====================================================
// What is Event Capturing?
// ====================================================
// 'Event Capturing' is just opposite of Event Bubbling.
// Meaning, events propagate from the Window down through the DOM tree to the target node. First parent event is fired then child events.

// Event capturing is also refered as "trickling".

// Since its traveling "down" the DOM tree. It's called Top-Bottom propagtion also.

// How do we enable the Event capturing since event bubbling is default mode. Pass a 3rd argument as "true"
// Example: handle.addEventListener('event', function, true);


// ====================================================
// Stop event propagation
// ====================================================
// We can stop event propagation, by "event.stopPropagation()" -- statement