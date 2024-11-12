console.log("Labas Pasauli");

console.log("Šiandien graži diena");

pirmas = 15;

console.log(pirmas);

pirmas = 25;

console.log(pirmas);

pirmas = 55;

console.log(pirmas);

// Kintamasis deklaruojamas vieną kartą norimu pavadinimu
let antras = 18;

// Kintamojo reikšmės pakeitimas:
antras = 22;

console.log("Ar kodas dar veikia?");

// Kintamojo deklaravimas be priskiriamos reikšmės
let trecias;

console.log(typeof trecias);

trecias = "Labas";

console.log(typeof trecias);

// Aritmetinio veiksmo rezultato priskyrimas prie kintamojo:
let ketvirtas = 22 + 19;

console.log(ketvirtas);

let laikinas = ketvirtas;

// Sutrumpintas aritmetinio veiksmo aprašymas:
// ketvirtas = ketvirtas / 2;
ketvirtas /= 2;

console.log("Po dalybos ir prieš dalybą:", ketvirtas, laikinas);

console.log("------STRINGAI:------");

let tekstas = 'UAB "Antakalnio ligoninė"';

tekstas = `UAB "Antakalnio ligoninė"`;

let kiekis = 15
let kaina = 19.99
let pvm = 50

// console.log("Užsakytų prekių kiekis: " + kiekis + ", bendra suma: " + kiekis * kaina)
console.log("Užsakytų prekių kiekis: " + kiekis + ", bendra suma: " + pvm + kiekis * kaina)

// Template literals panaudojimas
console.log(`Užsakytų prekių kiekis: ${kiekis}, bendra suma: ${pvm + kiekis * kaina}`)

let ilgis = 22; 
let plotis = 88; 

// Aritmetiniai veiksmai:
// + sudėtis
// - atimtis
// * daugyba
// / dalyba
// () nurodo veiksmo prioritetą

console.log("Ilgis padalintas iš pločio:", ilgis / plotis);

console.log("Ilgis padalintas iš pločio: " + ilgis / plotis);
console.log(`Ilgis padalintas iš pločio: ${ilgis / plotis}cm`);

// Jeigu norime priskirti sugeneruotą stringą prie kintamojo kaip reikšmę:
let rezultatas = `Ilgis padalintas iš pločio: ${ilgis / plotis}cm`

console.log(rezultatas)

