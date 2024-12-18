// import { sum, substract, multiply, divide } from './functions.js';
// // Kuomet importuojamas eksportas pagal nutylėjimą:
// import tekstas from './functions.js';

// Sujungtas į vieną variantas:
import tekstas, { sum, substract, multiply, divide } from './functions.js';

const objektas = { 
    a : 10,
    b : 20,
    c : 30
}

// objektas.a
// objektas.b
// objektas.c

const { a, b, c } = objektas;

console.log(a)
console.log(b)
console.log(c)

console.log(sum(15, 25));
console.log(substract(15, 25));
console.log(multiply(15, 25));
console.log(divide(15, 25));

const x = 25;

console.log(x);

console.log(tekstas);