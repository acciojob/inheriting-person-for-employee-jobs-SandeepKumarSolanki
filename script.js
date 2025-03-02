// Create the Person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// The greet method for the Person class
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Create the Employee class that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the parent class constructor (Person)
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up Employee's prototype chain to inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// // The jobGreet method for the Employee class
// Employee.prototype.jobGreet = function() {
//   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// }

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
