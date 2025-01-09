import express from 'express';
import { validateFields } from './helpers/util.js';

const app = express();

// Sukurkite express POST route'ą /register kurio tikslas priimti registracijos duomenis:
// name
// last_name
// email
// password

// Patikrinkite perduotas reikšmes. Jeigu trūksta bent vienos iš jų grąžinama žinutė: "Negauti registracijos duomenys".
// Atlikite reikšmių validaciją: 
// Vardas ir pavardė negali būti trumpesni nei 3 ir ilgesi nei 200 simbolių.
// El. pašto adresas negali būti trumpesnis nei 5 ir ilgesnis nei 50 simbolių. Taip pat privalo atitikti el. pašto formatą.
// Slaptažodis privalo turėti bent vieną skaičių ir turi būti ne trumpesnis nei 8 ir ne ilgesnis nei 16 simbolių.

// Neatitikus kažkuriam iš išvardintų kriterijų grąžinkite žinutę su klaidos kriterijumi. pvz. (Vardas privalo būti nuo 3 iki 200 simbolių ilgio).

// Jeigu validacija sėkminga grąžinama žinutė: “Sveikiname sėkmingai prisiregistravus platformoje”.

app.post('/register', (req, res) => {
    const fields = ['name', 'last_name', 'email', 'password'];

    if(!validateFields(req.query, fields))
        return res.json('Negauti registracijos duomenys');

    // if(
    //     !req.query.name || 
    //     !req.query.last_name || 
    //     !req.query.email ||
    //     !req.query.password
    // ) 
    //     return res.json('Negauti registracijos duomenys');

    if(
        req.query.name.length < 3 || 
        req.query.name.length > 200 || 
        req.query.last_name.length < 3 ||
        req.query.last_name.length > 200 
    )
        return res.json('Vardas arba pavardė yra per trumpi arba per ilgi');


    // const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // pattern.test(req.query.email)

    if(
        req.query.email.length < 5 ||
        req.query.email.length > 50 
    ) {
        return res.json('El. pašto adresas privalo būti ilgesnis nei 5 ir trumpesnis nei 50 simbolių');
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.query.email)) {
        return res.json('El. pašto adresas turi atitikti reikiamą formatą');
    }

    if(
        req.query.password < 8 || 
        req.query.password > 18
    ) {
        return res.json('Slaptažodis turi būti ilgesnis nei 8 ir trumpesnis nei 18 simbolių');
    }

    if(!req.query.password.match(/[0-9]/g)) {
        return res.json('Slaptažodyje turi būti bent vienas skaičius');
    }
        
    res.json('Sėkmingai prisiregistravome');
});

// Prisijungimo route'as

app.post('/login', (req, res) => {
    if(!validateFields(req.query, ['email', 'password'])) {
        return res.json('Negavome jokių duomenų, bandykite dar kartą');
    }

    if(
        req.query.email !== 'admin@vcs.lt' ||
        req.query.password !== 'Github12' 
    ) {
        return res.json('Neteisingi prisijungimo duomenys');
    }

    res.json('Sveikiname sėkmingai prisijungus');
});

app.listen(3000);

