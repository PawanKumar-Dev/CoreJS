// String padding methods are the one who pads a string with another string upto provided length.
// These are introduced in ES8.
// There are two main: padStart() and padEnd()

// ===============================================
// padStart(a, b): it pads a string with another string to a certain length from the start.
// Takes two arugument --> a: max length of new string. b: filler string to be used

// Output: "XXXXHello!"

let str1 = "Hello!";
paddedStr = str1.padStart(10, "X");

console.log(paddedStr);



// ===============================================
// padEnd(a, b): it pads a string with another string to a certain length from the end.
// So it's opposite of padStart()

// Output: "Hello!XXXX"

let str2 = "Hello!";
paddedStrFrmEnd = str1.padEnd(10, "X");

console.log(paddedStrFrmEnd);