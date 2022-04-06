// Event Object is parent of all events that you fire.
// Event object holds all info about the event you fired.

popalert.addEventListener('click', () => {
  alert("Alert is fired!");
  console.log(event);
  console.log(event.type);
  console.log(event.target);
});