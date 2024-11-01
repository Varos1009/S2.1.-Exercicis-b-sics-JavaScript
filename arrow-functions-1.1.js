// Nivel 1

// Ejercicio 1

function add(a, b) {
    return a + b
};

console.log(add(16, 71))

const add1 = (a, b) => a + b

console.log(add1(16, 71))

// Ejercicio 2

const randomNumber = () => Math.floor(Math.random() * 101)

console.log(randomNumber())

// Ejercicio 3

class Person {
    constructor(name) {
        this.name = name
    }
    greet = () => {
        console.log(`Hello, ${this.name}`)
    }
};

const person1 = new Person('Varos')

person1.greet()

//Nivel 2

// Ejercicio 4

const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const print = () => console.log(numbers[i]);
        print();
    }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

printNumbers(numbers);

// Nivel 3

// Ejercicio 5

const printMessage = () => {
    setTimeout(() => console.log("Hello"), 3000);
};

printMessage();