// Local Storage: It's storga location of browser. We can store our small data here. It's not secure so you should not store sensitive info here.
// localStorage is diffrent for every domain. So you need a live server to access it.
// Everything is stored in key value pair.

// Storing info in LocalStorage
localStorage.setItem('name', 'Pawan');

// Retriving stored info from localStorage
let retData = localStorage.getItem('name');
console.log(retData);

// You can remove indiviual item from localStorage
localStorage.removeItem('name');

// You can clear all items from localStorage as well
localStorage.clear();