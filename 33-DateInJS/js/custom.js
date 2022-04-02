// JS Date Object allow us to work with date
let d = new Date();
document.querySelector("span").innerText = d;

// If you provide 3 value in Date() object they are in order of (Year, Month, Date)
document.querySelector("#a").innerText = new Date("2022, 12, 10");

// If you provide 2 value, then (Year, Month) and date become 01 automatically
document.querySelector("#b").innerText = new Date("2022, 12");

// UTC time is Universal Coordinated Time. It is set by World Time Standard
let utcdate = new Date();

console.log(utcdate.getUTCDate());
console.log(utcdate.getUTCMonth());
console.log(utcdate.getUTCFullYear());


// ===============================================
// You can also set your own time in the data object so that we can access/use in elsewhere

let newd = new Date();
newd.setFullYear(2021);
console.log(newd);            // Output Thu Apr 01 2021 09:00:24 GMT+0530 (India Standard Time)