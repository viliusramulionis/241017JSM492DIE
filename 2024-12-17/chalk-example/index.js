//CommonJS - kuomet importuojami moduliai per require() funkciją
// const chalk = require('chalk');

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

setInterval(() => {
    console.log(chalk.green('Labas Pasauli').repeat(15));
}, 100);

// Sugrąžina kiek terminale galima patalpinti simbolių vienoje eilutėje:
console.log(process.stdout.columns)
// Terminalo eilučių kiekis:
console.log(process.stdout.rows)