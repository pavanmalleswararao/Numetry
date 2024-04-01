const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Jane",
    lastName: "Doe"
}

// Call fullName() with person1 as 'this'
console.log(person.fullName.call(person1)); // Output: John Doe

// Call fullName() with person2 as 'this'
console.log(person.fullName.call(person2)); // Output: Jane Doe
