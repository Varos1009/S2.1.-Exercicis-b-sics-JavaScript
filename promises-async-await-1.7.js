// Nivel 1

// Ejercicio 1      

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello, world!');
    }, 2000);
});

// Ejercicio 2

promise.then((result) => {
    console.log(result);
});

// Ejercicio 3

function asyncGreet(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hello') {
                resolve('The greet was successful!');
            } else {
                reject('Error: Invalid input!');
            }
        }, 2000);
    });
}

asyncGreet('Hello').then((result) => {
    console.log(result);
});

// Ejercicio 4

async function printGreet() {
    const result = await promise;
    console.log(result);
};

printGreet();

// Nivel 2

// Ejercicio 5

async function printGreet2() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

printGreet2();

// Nivel 3

// Ejercicio 6

const promise1 = new Promise((resolve) => { 
    setTimeout(() => {
        resolve('First promise!');
    }, 2000);
});    

const promise2 = new Promise((resolve) => { 
    setTimeout(() => {
        resolve('Second promise!');
    }, 3000);
});

Promise.all([promise1, promise2]).then((result) => {
    console.log(result);
});