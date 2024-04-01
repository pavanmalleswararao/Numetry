// Constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
};

// Creating an instance of Person
const john = new Person('John');

// Accessing the greet method
john.greet(); // Output: Hello, my name is John

// The prototype chain:
// john ---> Person.prototype ---> Object.prototype ---> null
