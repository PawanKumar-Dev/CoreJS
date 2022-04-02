// The Document Object Model (DOM) is a programming interface for web documents.
// The DOM represents our document(webpage) as nodes and objects; that way, programming languages such as JavaScript can interact with the page behind the scene by manipulating the DOM

// So in simple english:
// DOM is codelevel/programming representation of our webpage that we see in our browser. Also called window or document interchangebly.

// In HTML file, you see that it contains HTML elements, like <p>, <div>, <section>, etc. It also has HTML comments, line-breaks, text content, and HTML attributes.
// <p>, <div>, <section>, etc. are treated as "element" nodes
// Comments are "comment" nodes
// "text" objects are "text nodes" -- refers to content inside the elements <div>text content</div>
// Line-breaks are also classified as "text nodes".
// And with help of Javascript, we access these DOM nodes in the node tree.


// Note: Every HTML element is a node, but not every node an HTML element.

// All this element, nodes come together in a tree like hierhical structure we call --DOM TREE---And this tree representation is the Model. Hence called DOM.


// Window object is the Global object which consist our dom tree.
// NOTE: Object can be anything either the node or element. i.e. <p> will be called node object or element object-- both are true.

console.log(window);


// FINAL SUMMERIZE:
// When page loads, browser creates DOM tree.
// This "DOM tree is the MODEL part" of DOM
// "Everything in the page is considered Object". e.g.-> element object, attribute object, text object, functions that willbe implemented on these element or attr by JS are also objects. etc
// Nodes are elements, attr, text in that document we loaded. Everything is manipulated on basis of nodes.