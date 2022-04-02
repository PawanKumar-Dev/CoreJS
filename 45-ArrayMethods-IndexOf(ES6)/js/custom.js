// The indexOf() method returns the first index at which our given element is found in array.
// If not found returns -1.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

let foundIndex = beasts.indexOf("duck");                // Let us search the array for our given string
console.log(foundIndex);                                // return the index position

console.log(beasts.indexOf("duck", 4));                 // We can offset the index too

console.log(beasts.indexOf("sheep"));                   // Will return -1 since cannot be found


// =====================================================
// lastIndexOf() returns the last matching element in the array.

const animals = ['Tiger', 'Penguin', 'Deer', "Lion", "Tiger", "Fox", "Slime", "Tiger", "Crocdile"];
console.log(animals.lastIndexOf("Tiger"));

//Output 7, so it ignores the element found in the start and search for last element
