const readline = require('node:readline/promises');

// process yra globalus kintamasis prieinamas nodejs aplinkoje
// console.log(process);

async function klausimynas() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const vardas = await rl.question('Įveskite savo vardą:');
    const pavarde = await rl.question('Įveskite savo pavarde:');
    console.log(`Sveiki, ${vardas} ${pavarde}`);

    rl.close();
}

klausimynas();