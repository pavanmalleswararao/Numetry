const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// Create a new function with 'this' set to person1
const fullName = person.fullName.bind(person1);

console.log(fullName()); // Output: John Doe
