import express from 'express';
import multer from 'multer';

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, './uploads');
    },
    filename: function (req, file, next) { 
        next(null, Date.now() + '.jpg');
    }
});

const upload = multer({ storage: storage });

// Norint priimti duomenis JSON formatu
app.use(express.json());

// Nuotrauku atvaizdavimui skirta konfiguracine eilute
app.use('/nuotraukos', express.static('uploads'));

// Middleware priskyrimas
const failuKelimas = (req, res, next) => {
    console.log('Failu kelimas aktyvuotas');

    if(req.query.zinute === 'true') 
        return res.json('Gavome Jūsų žinutę');

    next();
}

app.get('/api', failuKelimas, (req, res) => {
    console.log(req.body);
    res.json('Veikia');
});

app.post('/api', upload.single('nuotrauka'), (req, res) => {
    // req.file savybėje nugula persiųsto failo, kuris jau buvo išsaugotas, duomenys
    console.log(req.file);
    console.log(req.body);
    res.json('POST metodu duomenys gauti');
});

app.listen(3000);