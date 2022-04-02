// filter() method returns a array with all elements who satisfy the condition provided.

// =======================================================
// Returns the cars who name are more than 6 char long
// So simply we can simple filter with it
const cars = ["Saab", "Volvo", "BMW", "Mercedes", "Maruti"];

filteredData = cars.filter(function(carname){
  return carname.length > 6;
});

console.log(filteredData);

// If conditon is "not satisfied" it returns a "empty array"