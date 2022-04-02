// find() method returns the first element in provided array that satisfies provided testing function.
// If no values satisfy testing function, "undefined" is returned.


// ==========================================================
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'elite'];

// Function for condition testing
function findTest(words) {
  return words == 'elite';
}

console.log(words.find(findTest));



// =============================================================
const ages = [3, 10, 18, 19, 20];

// Function for testing
function fullAge(age) {
  return age > 18;
}

console.log(ages.find(fullAge));