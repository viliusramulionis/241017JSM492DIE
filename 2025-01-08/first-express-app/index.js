import express from 'express'

// Inicijuojame express biblioteka ir priskiriame prie kintamojo app
const app = express();

// Route'o (Kelio aprašymas)
app.get('/', function (req, res) {
    // console.log(req.query);
    const vardai = [
        "Darius",
        "Marija",
        "Šarūnas",
        "Paulius"
    ];

    // JEIGU PAMATYSITE TOKIA KLAIDA:  Cannot set headers after they are sent to the client
    // JI REISKIA, JOG ATSAKYMA BANDOTE SIUSTI NE VIENA KARTA
    
    res.json(vardai);
    // res.json(vardai);
});

// VARDŲ MASYVAS DEKLARUOJAMAS MODULIO APIMTYJE
// DUOMENŲ BAZĖS SIMULIACIJA
const vardai = [
    "Darius",
    "Marija",
    "Šarūnas",
    "Paulius"
];

app.get('/vardai', function (req, res) {
    // req.query savybėje yra patalpintas objektas su visomis 
    // query parametrų reikšmėmis kurios buvo persiųstos
    
    if(req.query.vardas) {
        res.json(vardai.filter(value => value.includes(req.query.vardas)));
    } else {
        res.json(vardai);
    }
});

// POST Metodu pridedame naują reikšmę
app.post('/vardai', function (req, res) {
    vardai.push(req.query.vardas);

    res.json(vardai);
});

// PUT Metodu modifikuojame reikšmę
app.put('/vardai', function (req, res) {
    const index = vardai.findIndex(value => value === req.query.vardas);

    vardai[index] += ' Modifikuotas'; 

    res.json(vardai);
});

// Delete Metodo aprašymas
app.delete('/vardai', function (req, res) {
    const index = vardai.findIndex(value => value === req.query.vardas);

    if(index !== -1) {
        vardai.splice(index, 1);
    }

    res.json('Vykdome trynima');
});

// Aplikacijos inicijavimas ir serverio paleidimas naudojant 3000 portą
app.listen(3000);

// https://google.com:5001/
// https:// - yra protokolas
// google.com - yra domenas
// 5001 - yra portas

// CRUD EXPRESS APLIKACIJOS ŠABLONAS
// CREATE - POST
// READ - GET
// UPDATE - PUT, PATCH (Kuomet atnaujinama tik viena reikšmė)
// DELETE - DELETE