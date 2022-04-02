// "If Else" statement to create a program that can make decisions.

/*
It has 3 forms:
1)  if statement
2)  if...else statement
3)  if...else if...else statement(called IfElse Ladder)
*/

let pr = prompt("Enter a number: ");

if (pr === 0) {
  console.log("This is Zero. Neither Positive nor Negative");
} else if(pr > 0) {
  console.log("This is Positive Number");
} else {
  console.log("This is Negative Number");
}