// For In loop is introduced in ES6

let students = ["Pawan", "Raju", "Shayam", "Ramesh"];

// ===============================================================
// If we use our standard For loop:
for (let index = 0; index < students.length; index++) {
  const element = students[index];
  console.log(element);
}

console.log("================================");


// ==========================================================
// Now using the For In loop
for (let element in students) {
  console.log(element);               // It prints the index of given array
  console.log(students[element]);     // Prints the data of array
}

console.log("================================");

// ==========================================================
// Now using the For Of loop
for (const element of students) {
  console.log(element);
}
