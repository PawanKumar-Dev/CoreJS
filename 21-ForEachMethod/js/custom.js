// The forEach() method calls a function and iterates over the elements of an array. It can also be used on Maps and Sets.
// forEach is espcially useful in case of multiD arrays

// Syntax of forEach()
// array.forEach(function(currentValue, index, arr))

// =========================================================
// forEach for simple array
let students = ['John', 'Sara', 'Jack'];
students.forEach(function(item){
  console.log(item);
});


// you can use forEach in places of "for loop"
let arrayItems = ['item1', 'item2', 'item3'];
let copyItems = [];

for(i=0; i<arrayItems.length; i++) {
  copyItems[i] = arrayItems[i];
}
console.log(copyItems);

let anothercopyItems = [];

arrayItems.forEach(function(item, index, arr){
  anothercopyItems[index] = item;
});
console.log(anothercopyItems);


// ======================================
// forEach() for multiD array

let studentsData = [ ['Jack', 24], ['Sara', 23] ];

studentsData.forEach(function(item1){
  item1.forEach(function(item2){
    console.log(item2);
  });
});