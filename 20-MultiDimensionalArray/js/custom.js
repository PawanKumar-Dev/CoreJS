// A multidimensional array is an array that contains another array.
let trees = [ ["Apple", "Orange", "Mangoes"], ["Peepal", "Neem", "Sheesham"] ];

console.log(trees);


// Access Elements of an MultiD array.
// Just like other arrays they are accessed via index position. But to access indivual elment we are given two indexes.

console.log(trees[0]);        // Output: ["Apple", "Orange", "Mangoes"]
console.log(trees[0][0]);     // Output: Apple

// Simple array methods like pop(), push(), shift() and unshift() are effective with multiD array


// Accessing MultiD array with For loop
let studentsData = [ ['Jack', 24], ['Sara', 23] ];

for (let i = 0; i < studentsData.length; i++) {
  for (let j = 0; j < studentsData.length; j++) {
    console.log(studentsData[i][j]);
  }  
}