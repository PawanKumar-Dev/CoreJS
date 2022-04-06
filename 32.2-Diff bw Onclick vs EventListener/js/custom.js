// Both Event method works pretty much same. Except 1 key difference:

// =====================================================
// Using HTML attached Events
// In this case if same event is called multiple times, they overwrite each other

function myfunc() {
  console.log("button clicked");
}

function myfunc() {
  alert("Alert button clicked");                  // Only this works. Becoz previus call is overwritten
}



// =========================================
// addEventListener Method
// we can use the same event to do diffrent stuff. And they won't overwrite each other.

changecolorevent2.addEventListener('click', () => {
  console.log("button clicked");
});

changecolorevent2.addEventListener('click', ()=>{
  alert("Button was clicked. And this is alerting about it");
});