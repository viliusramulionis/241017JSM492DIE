const x = 15;

export function sum(a, b) {
    return a + b;
}

export function substract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

console.log('Funkcijos pajungtos')

// Kiekvienas failas gali turėti vieną eksportuojamą reikšmę pagal nutylėjimą:
export default 'Labas';