// Window Object provide us with option to print page

// Printing full page
function printFullPage() {
  window.print();
}

// Printing section
function printSection(secid) {
  // Getting diff section data dynamically
  let secContent = document.querySelector("#"+secid).innerHTML;
  let fullContent = document.body.innerHTML;
  // Then we trick the window to see our div content is actually the body content
  document.body.innerHTML = secContent;
  // now we print that section
  window.print();
  // After printing we reset the body content to original data
  document.body.innerHTML = fullContent;
}