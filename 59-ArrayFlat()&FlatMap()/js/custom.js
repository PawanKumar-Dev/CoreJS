// array.flat() and array.flatMap() are both new method into ES2019.

// =================================================================
// array.flat: it creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax: array.flat() || array.flat(depth)


// Now we have an array and a sub array. To flatten it we use flat()
// Flatten means converting multi-dimensional array into single-dimensional array
// Output: [1, 2, 3, 4, 5]

let numArray = [1, 2, 3, [4, 5]];
console.log(numArray.flat());


// Now what if we had this array.
// [1, 2, 3, 4, 5, Array(2)] --- Meaning our array didn't truly flattened.
// To solve this we have depth arugment option in flat()

let numArray2 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(numArray2.flat());            // equal to numArray2.flat(1);
console.log(numArray2.flat(2));           //[1, 2, 3, 4, 5, 6, 7]


// =================================================================
// array.flatMap() -- is a mix of flat() and map() methods.
// First it runs your map method to map your values of new array according to callback function you provided.
// Then this new mapped array is flattened to a single dimensional array

let numArray3 = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let flatMappedArr = numArray3.flatMap(function(elem) {
  return elem[0] + elem[1];
});

console.log(flatMappedArr);              // Output: [3, 7, 11]