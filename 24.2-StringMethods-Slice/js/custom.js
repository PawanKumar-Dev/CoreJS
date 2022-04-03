// The slice() method returns the extracted part in a new string. However it doesn't change original string.
// Inside the () parenthsis we pass the index positions where we are to slice

// ====================================
// Output: 'Hey t' -- becoz 5 index is not inclusive.
let str = "Hey there! hello string!";
console.log(str.slice(0, 5));


// =========================================================
// Similarly we don't need two index position always
// Output: 'here! hello string!'  -- becoz 5 is not starting index position and last index position is till the string ends
console.log(str.slice(5,));



// ============================================
// We can even provide negative index too
// Output: 'here! hello strin' -- start from 5 index pos, then goes to end, and return back to -2 position

console.log(str.slice(5, -2));