// Nivel 1

// Ejercicio 1

const arrayNum = [1, 2, 3, 4];

const arrayNum2 = arrayNum.map((element) => {
    return element ** 2;
});

console.log(arrayNum2);

// Ejercicio 2

const arrayNum3 = [1, 2, 3, 4];

const arrayNum4 = arrayNum3.filter((element) => {
    return element % 2 === 0;
});

console.log(arrayNum4);         

// Ejercicio 3

const arrayNum5 =  [1, 10 , 8, 11];

const firstMoreThanTen = arrayNum5.find((element) => {
    return element > 10;
});

console.log(firstMoreThanTen); 

// Ejercicio 4

const arrayNum6 =  [13, 7, 8, 21];

const total1 = arrayNum6.reduce((total, element) => {
    return total + element;
});

console.log(total1);

// Nivel 2

// Ejercicio 5

const arrayNum7 =  [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const result = arrayNum7.filter((element) => element >= 10).map((element) => element * 2).reduce((total, element) => total + element);

console.log(result);

// Nivel 3

// Ejercicio 6

const arrayNum8 =   [11, 12, 13, 14];

const someBiggerThan10 = arrayNum8.some((element) => element > 10);

console.log(someBiggerThan10);  

const allBiggerThan10 = arrayNum8.every((element) => element > 10);

console.log(allBiggerThan10);
