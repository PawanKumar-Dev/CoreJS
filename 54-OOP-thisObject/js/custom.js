// this: it contains the current context.
// Meaning 'this' value differ depending upon the situation 'this' is used.

// ===========================================
// Example 1:
// Output: "window object". Becoz it's current context is window global object

console.log(this);


// ===========================================
// Example 2:
// Output: "window object". Even now it doesn't refer to function but the global object

function myFunc() {
  console.log(this);
}

myFunc();


// ===========================================
// Example 3:
// Output: "Pawan". Gives you the global score variable data

var myName = "Pawan";

function funcAnother() {
  console.log(this.myName);
}

funcAnother();


// ===========================================
// Example 4:
// Output: "{name: 'Delhi', population: 1000000, getDetails: ƒ}"
// Now "this" context change to current object instead of "Window object"

let city = {
  name: "Delhi",
  population: 1000000,
  getDetails: function() {
    console.log(this);
  }
}

city.getDetails();


// ===========================================
// Example 5:
// Output: "window object". Fat Arrow function doesn't work with "this"

let anotherCity = {
  name: "Mumbai",
  population: 2000000,
  getDetails: () => {
    console.log(this);
  }
}

anotherCity.getDetails();


// ===========================================
// Example 6:
// Output: 'My name is Pawan and my profession is Web Dev and here is my website: devspecial.online'
// 'this' works fine with nested objects.

let resume = {
  myName: {
    rlname: "Pawan",
    profession: "Web Dev"
  },
  website: "devspecial.online",
  getData: function() {
    console.log(`My name is ${this.myName.rlname} and my profession is ${this.myName.profession} and here is my website: ${this.website}`);
  }
}

resume.getData();