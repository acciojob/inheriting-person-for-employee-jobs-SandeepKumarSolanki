// Person Class Definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Employee Class Definition that Inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
	// super.greet();
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

const person = new Person("Alice", 25);
person.greet();

// Do not change the code below this line
window.Person = Person;
window.Employee = Employee;
