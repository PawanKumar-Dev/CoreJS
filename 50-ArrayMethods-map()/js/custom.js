// Sometimes we need array & apply some procedure to its elements so we get a new array with modified elements.

// array.map() method allows you to iterate over an array and modify its elements using a callback function.
// This callback function will then be executed on each array's elements.

// ======================================

// map.array() syntax:
// arr.map(function(element, index, array){  }, this);


// ===============================
// An simple array
// Lets multiply each element with 3 and update array

let nums = [3, 4, 5, 6];

for (let i = 0; i < nums.length; i++) {
  const element = nums[i]*3;
  nums[i] = element;
}

console.log(nums);



// ================================
// You can achieve same result with array.map()
let nums2 = [3, 4, 5, 6];

let newArray = nums2.map((element)=>{
  return element * 2;
});

console.log(newArray);


// ===================================
// you can simply print data with array.map() too
let nums3 = [3, 4, 5, 6];

let displayArry = nums3.map((element, index)=>{
  return `This is array value: ${element} and its index is: ${index}`;
});

console.log(displayArry);