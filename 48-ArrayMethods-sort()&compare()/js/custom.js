// sort() sorts the elements of an array. Happens in alphabetical and ascending order.
// reverse() does the opposite of sorting.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort());             // order of ascending
console.log(fruits.reverse());          // order of descending


// ===============================================
// However it doesn't works that well with numbers

const highscores = [40, 100, 1, 5, 25, 10];

console.log(highscores.sort());


// But output is: [1, 10, 100, 25, 40, 5]
// This happens becoz elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.
// To fix this we provide a compare function

sortedArry = highscores.sort(function(a, b) {
  return a-b
});

console.log(sortedArry);