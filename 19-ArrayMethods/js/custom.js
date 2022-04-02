// To operate on arrays, JS have some built-in methods:
// push() and pop() to add element and remove element in array --- but from last position.
// They return an array.

let fruits = ["Apple", "Orange", "Guave", "Banana", "Grapes"];
console.log(fruits);

// Push()
fruits.push("Mangoes");
console.log(fruits);

// Pop()
fruits.pop();
console.log(fruits);

// =========================================
// unshift() and shift() also add element and remove element in array ------ but from first position.

// Unshift()
fruits.unshift("Pomegranate");
console.log(fruits);

// Shift()
fruits.shift();
console.log(fruits);

// ============================================
// We can also add element by accessing via index
fruits[5] = "Cake";
console.log(fruits);

// But if you jump over a non-existing element in array. That is if array is 2 element in length and you added you new element at 4th or 5th position, any empty element will be declared "undefined" or "empty"
fruits[7] = "Choclate";
console.log(fruits);


// ================================================
// "length" property gives you the length of array
city = ["Delhi", "Mumbai", "Jaipur"];
console.log(city.length);                     // Output 3

