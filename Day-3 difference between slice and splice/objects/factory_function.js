function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    };
}
const person1 = createPerson('Alice', 25);