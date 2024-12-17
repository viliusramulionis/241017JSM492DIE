const readline = require('node:readline');

// process yra globalus kintamasis prieinamas nodejs aplinkoje
// console.log(process);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Įveskite savo vardą:', (vardas) => {
    rl.question('Įveskite savo pavardę:', (pavarde) => {
        console.log(`Sveiki, ${vardas} ${pavarde}`);
        rl.close();
    });
});

