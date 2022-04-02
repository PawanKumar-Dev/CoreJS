// Using DOM, we can create new element nodes and put content in them too

// Create new para node
let newPara = document.createElement("p");

// Create new text node for our paragraph
let textNode = document.createTextNode("A new paragraph with js");

// Next we append our text to paragraph
newPara.appendChild(textNode);

// Now we show our new paragraph in page's body
document.body.appendChild(newPara);