// Object: It's a simple "key:value" pair data structure.
// Here we can store variables, functions etc in one place.

// ===================================================================
// Creating Object

let bioData = {
  name: "Pawan",
  age: 26,
  getDetails: function() {
    console.log(`My name is ${bioData.name} and age is ${bioData.age}`);
  }
}

// Access a method(function inside an object) inside the object
// Access a variable inside the object
bioData.getDetails();
console.log(bioData.name);


// ========================================================================
// Another way to declare methods inside the objects(ES6 way)

let city = {
  name: "Delhi",
  population: 10000000,
  getCityDetail() {
    console.log(`This is ${city.name} city and its population is ${city.population}`);
  }
}

city.getCityDetail();


//==========================================================================
// Nested Object. Or creating an object inside another object

let employee = {
  company: "Google",
  salary: 1400,
  contractEmployee: {
    empName: "Pawan",
    empType: "Contract",
    empDetails: function() {
      console.log(`My name is ${this.empName} and I'm a ${this.empType} type employee.`);
    }
  }
}

// Accessing nested object
employee.contractEmployee.empDetails();