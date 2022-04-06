// substring() is similar to slice() that it returns us a string based on given index positions.
// Main difference is substring() cannot accept negative index.

// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

let str = "Apple, Banana, Kiwi";

console.log(str.substring(7, 13));
console.log(str.substring(-7, -4));          //give empty
console.log(str.substring(6, -1));           // index start from 0 when -ve index


// =======================================================
// substr() is depracted.
// It takes two arguments just like slice() and substring()
// Difference is the second parameter specifies length of the extracted part.

console.log(str.substr(7, 6));


// ===========================================================
// replace() : it replaces "one specified value" with another value in string.
// This value can be "string" or "regexp"
// But it doesn't make change in existing string. It returns a new modified string.
// It only replaces the first match

let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "Amazon"));


// ==========================================================
// replaceAll() : it replaces "all specified value" with another value in string.

let paragraph = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(paragraph.replaceAll("dog", "Cat"));


// =============================================================
// To replace all matches, if we use regular expression with a "/g" flag (global match):
// Without match it throws error

let anthString = "Please visit Microsoft and Microsoft!";
let replacedTxt = anthString.replace(/Microsoft/g, "Amazon");
console.log(replacedTxt);