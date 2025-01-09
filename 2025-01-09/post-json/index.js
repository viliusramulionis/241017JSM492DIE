import express from 'express';

const app = express();

// Konfigūracinė eilutė kurią būtina nurodyti norint serveryje priimti duomenis JSON formatu
app.use(express.json());

app.post('/', (req, res) => {
    // Body lygmenyje persiųsti duomenys nugula į req.body savybę

    console.log(req.body);
    console.log(req.body.vardas);
    console.log(req.body.pavarde);

    // Query parametrai siunčiami užklausoje yra priimami nepaisant body lygmenyje persiųstų duomenų būvimo
    console.log(req.query)

    res.json('Sveiki');
});

// Parametro nustatymas
app.get('/:id', (req, res) => {
    console.log(req.params);

    res.json('Dėkui jūsų parametras yra gautas');
});

// Kelių Parametrų nustatymas
app.get('/:id/:name', (req, res) => {
    console.log(req.params);

    res.json('Dėkui jūsų parametrai yra gauti');
});

app.listen(3000);
