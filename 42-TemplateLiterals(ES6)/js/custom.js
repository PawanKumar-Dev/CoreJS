// Template Literals are concept intoducted in ES6(EcmaScript 2015) update

// Usually when we mix our strings with variables or varibale expression of JS, we need to get messy.
// Example: 
let personName = "Pawan";
let salary = 100;
let salaryBonus = 50;

console.log("Hi there, " + personName + " your salary is " + salary + " with bonus of " + salaryBonus);


// But using template literals, we can embed our variable with ease and without this unneccsary mess
// Whole string is wrapped inside ` ` ticks
// And variable are inject with format ${variable}
console.log(`Hi there, ${personName} your salary is ${salary} with bonus of ${salaryBonus}`);