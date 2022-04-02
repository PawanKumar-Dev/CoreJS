// A prompt box is mostly used if you want  user input a value before entering a page.

// Prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// If user clicks "OK" Prompt returns inputed value. If the user clicks "Cancel" Prompt returns null.

// Data entered in prompt is always string value. So if you want integers or other things we must do type conversion.

promptValue = prompt("Enter your name?");

console.log(promptValue);
console.log(typeof(promptValue));