// reduce() method is an ES5 feature.
// array.reduce() method is used to reduce the array to a single value.
// It executes a provided function for each value of array (from left-to-right).
// Then the return value of this function is stored in an accumulator.

/*
Syntax
array.reduce( function(accumulator, arrayElement, arrayElementIndex, array) {
  // Code to execute
}, initialValue );
*/

// It introduce 2 new things:
// 1st is Accumulator: it store all values that are being calculate by reduce method
// 2nd is intialValue: we can set an intial value for accumulator

// ====================================
// Calculate total of an array using reduce()

const array1 = [1, 2, 3, 4];

let total = array1.reduce((accumulator, element, index, array1)=>{
  return accumulator += element;
});

console.log(total);


// ==============================================
// We can set a inital value in accumulator

const array2 = [1, 2, 3, 4];

let totalWithInitial = array2.reduce((accum, elem, index, array2)=>{
  return accum += elem;
}, 10);

console.log(totalWithInitial);


// ======================================================
// One of the biggest advantage of reduce() over other such methods which are available in ES6, is reduce is chainable with map() and filter()

const array3 = [1, 2, 3, 4, 5];

// Using map to multiply 3 into our array3
// Then filter only those value which are greater than 10
// Then reduce will give their total

let finishVal = array3.map((elem, index, array3) => {
  return elem * 3;
}).filter((elem, index, array3) => {
  return elem > 10;
}).reduce((accum, elem, index, array3) => {
  return accum += elem;
});

console.log(finishVal);


// ============================================================
// You can reduce this code significantly if you remove all braces{} and return keywords since fat arrow function doesn't need them

let finishVal2 = array3.map((elem, index, array3)=> elem * 3).filter((elem, index, array3)=>elem > 10).reduce((accum, elem, index, array3)=>accum += elem);

console.log(finishVal2);


// ===================================================================
// You also use reduce to convert multi dimenisional array to simple array. Called flattening.
// Even though reduce does it very well. There are better method in ES6 for this purpose.

let multiArray = [[0, 1], [2, 3], [4, 5]];

let flattened = multiArray.reduce((accum, elem)=>{
  return accum.concat(elem);
});

console.log(flattened);