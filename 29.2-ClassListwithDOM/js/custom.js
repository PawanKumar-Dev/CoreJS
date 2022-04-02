// classList is a methods to add or remove class on element using JS

// We will add class to our <p> element
let para1 = document.getElementsByClassName('para1')[0];
console.log(para1);

function addBG() {
  para1.classList.add('changeBg');
}

function removeBG() {
  para1.classList.remove('changeBg');
}
