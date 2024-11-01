// Nivel 1

// Ejercicio 1

const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

console.log(array3);

// Ejercicio 2

const addNumbers = (...numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Nivel 2

// Ejercicio 3

const object1 = {
    name: 'Varos',
    age: 38,
    city: 'Yerevan'
};

const object2 = {
    ...object1
};

object2.age = 40;

console.log(object1);
console.log(object2);

// Ejercicio 4

const array5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [first, second, ...rest] = array5;

console.log(first);
console.log(second);
console.log(rest);

// Nivel 3

// Ejercicio 5

const showDetails = (name, age, city) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
};

const details = ["Varos", 38, "Yerevan"];

showDetails(...details);

// Ejercicio 6

const object3 = {
    name: 'Varos',
    age: 38
};

const object4 = {
    city: 'Yerevan',
    profession: 'Engineer'
};

const object5 = {
    ...object3,
    ...object4
};

console.log(object5);