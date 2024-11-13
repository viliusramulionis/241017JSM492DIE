console.log("-----SĄLYGOS-------");

console.log(11 === 10);

// Boolean reikšmės: true arba false

let rodyti = true;

if(rodyti) {
    console.log("Sąlyga teigiama");
} 

rodyti = false;

if(rodyti) {
    console.log("Sąlyga teigiama");
} else {
    console.log("Sąlyga neigiama");
}

// Dviejų reikšmių palyginimas

let pirmasSkaicius = 5;
let antrasSkaicius = 5;

if(pirmasSkaicius === antrasSkaicius) {
    console.log("Skaičiai yra lygūs");
} else {
    console.log("Skaičiai nėra lygūs");
}

// Reikšmių be duomens tipų palyginimas

pirmasSkaicius = "5";
antrasSkaicius = 5;

console.log(typeof pirmasSkaicius);
console.log(typeof antrasSkaicius);

if(pirmasSkaicius == antrasSkaicius) {
    console.log("Skaičiai yra lygūs");
} else {
    console.log("Skaičiai nėra lygūs");
}

// Sukurkite du kintamuosius jiems priskirkite skaičius nuo 0 iki 10
// Patikrinkite ar skaičiai nėra lygūs, jei taip padalinkite vieną skaičių iš kito

pirmasSkaicius = 8;
antrasSkaicius = 5;

if(pirmasSkaicius !== antrasSkaicius) {
    console.log(pirmasSkaicius / antrasSkaicius);
} 

// Sukurkite du kintamuosius jiems priskirkite skaičius nuo 0 iki 10
// Patikrinkite ar skačiai nėra lygūs ir didesnį skaičių padalinkite iš mažesniojo

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

pirmasSkaicius = random(0, 10); 
antrasSkaicius = random(0, 10); 

console.log(pirmasSkaicius, antrasSkaicius);

if(pirmasSkaicius !== antrasSkaicius) {
    if(pirmasSkaicius > antrasSkaicius) {
        console.log(pirmasSkaicius / antrasSkaicius);
    } else {
        console.log(antrasSkaicius / pirmasSkaicius);
    }
} 
