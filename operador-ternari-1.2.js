// Nivel 1

// Ejercicio 1

const canDrive = (age) => age >= 18 ? 'Can drive' : 'Can\'t drive'

console.log(canDrive(18));

// Ejercicio 2

const compare = (num1, num2) => num1 > num2 ? 'num1 is bigger' : 'num2 is bigger'

console.log(compare(1, 2));

// Nivel 2

// Ejercicio 3

const verifyNumber = (num) => num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';

console.log(verifyNumber(0));

const findMax = (a, b, c) => a > b ? (a > c ? a : c) : (b > c ? b : c);

console.log(findMax(1, 2, 3));

// Nivel 3

// Ejercicio 4

const evenOrOdd = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(`${numbers[i]} is ${numbers[i] % 2 === 0 ? 'Even' : 'Odd'}`);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenOrOdd(array);