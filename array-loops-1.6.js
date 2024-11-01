// Nivel 1

// Ejercicio 1

const arrayNames = ['Anna', 'Bernat', 'Clara'];

arrayNames.forEach((element) => {
    console.log(element);
});

// Ejercicio 2

const arrayNames2 = ['Anna', 'Bernat', 'Clara'];

for (let i of arrayNames2) {
    console.log(i);
}

// Ejercicio 3

const arrayNumbers3 = [1, 2, 3, 4, 5, 6];

const evenNumbers = arrayNumbers3.filter((element) => {
    return element % 2 === 0;
});

console.log(evenNumbers);

// Nivel 2

// Ejercicio 4  

let obj = { name: 'Ona', age: 25, city: 'Barcelona' };

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Ejercicio 5

let numbers7 = [1, 2, 3, 4, 5, 6];

for (let key of numbers7) {
    if (key === 5) {
        break;
    }
    console.log(key);
}


// Nivel 3

// Ejercicio 6

let names = ['Anna', 'Bernat', 'Clara'];

for (let [index, name] of names.entries()) {
    console.log(`${index}: ${name}`);
}


