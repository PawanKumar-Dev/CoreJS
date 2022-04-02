// splice() method is capable all crud operations in array.
// splice returns an array containing the deleted elements.

// 1. adding element in array
// 2. remove element in array
// 3. update element in array

// Syntax:
// splice(start, deleteCount, item1)

// =====================================================
// 1. Add element in array
// =======================================
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Adding element in array at last position
// Manual index providing
fruits.splice(4, 0, "Grapes");
console.log(fruits);


// Adding element in array at last position
// Dynamic index providing
fruits.splice(fruits.length, 0, "Guave");
console.log(fruits);


// Adding element in array at first position
let element = fruits.splice(0, 0, "Raddish");
console.log(fruits);


// splice returns an array containing the deleted elements. But since we added item, we get a empty array
console.log(element);


// =====================================================
// 2. Remove element in array
// =======================================

let returnValue = fruits.splice(0, 1);
console.log(returnValue);


// =====================================================
// 3. Update element in array
// =======================================
// You simulate update by deleting the item and then adding new one

console.log(fruits);

//Manual index provided
fruits.splice(2, 1, "NewApple");
console.log(fruits);

// Dynamic index provided
let upindex = fruits.indexOf('Mango');
fruits.splice(upindex, 1, "NewMango");
console.log(fruits);