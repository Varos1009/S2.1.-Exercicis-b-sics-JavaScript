// Nivel 1

// Ejercicio 1

const process = (number, callback) => callback(number);

console.log(process(2, number => number * 2));

// Ejercicio 2

const calculate = (num1, num2, callback) => callback(num1, num2);

const sum = (a, b) => a + b;

console.log(calculate(2, 3, sum));

//Nivel 2

// Ejercicio 3

const waitAndGreet = (name,callback) => {
    setTimeout(() => {
        callback(name);
    }, 2000);
};

const greet = (name) => {
    console.log(`Hello, ${name}`);
};

waitAndGreet("Varos", greet);

// Ejercicio 4

const processElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

const printElement = (element) => {
    console.log(`Element: ${element}`);
};

const nums = [1, 2, 3, 4, 5];

processElements(nums, printElement);

//Nivel 3

// Ejercicio 5

const processString = (string, callback) => {
    const upperCase = string.toUpperCase();
    callback(upperCase);
};

const printString = (text) => {
    console.log(`String: ${text}`);
};

processString("Hello, how are you", printString);