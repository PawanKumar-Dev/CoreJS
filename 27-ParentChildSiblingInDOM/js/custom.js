// Accessing DOM with Parent, Child and Sibling

// Find out Parent of our ul element node
// parentNode --> give us the <body> element since its the parent of ul
let list = document.querySelector('ul');
console.log(list.parentNode);


// Find out the siblings
// it gives us the "#text" becoz there must be white space after the selecting element
// nextSibling  --> gives the sibling <p> element
// if we .nextSibling --> we can access the next sibling too
let para = document.querySelector("#pid");
console.log(para.nextSibling);
console.log(para.nextSibling.nextSibling);
console.log(para.nextSibling.nextSibling.nextSibling);



// Find out the Children
// Note: Same thing of #text will happen if we have white space.

// Gives us the all child node of body
let children  = document.body.childNodes;
console.log(children);

// Gives us the child node of ul
let ul = document.body.querySelector("ul");
console.log(ul);
console.log(ul.children);       // Gives us li collection
console.log(ul.firstChild);     // first child node of ul
console.log(ul.lastChild);      // last child node of ul