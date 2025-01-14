import express from 'express';
import mongoose from 'mongoose';

import video from './controller/video.js';
import user from './controller/user.js';

const app = express();

app.use(express.json());

// Pirmu parametru nurodomas kelias, 
// antru nurodomas routeris
app.use('/api/video', video);

app.use('/api/user', user);

try {
    await mongoose.connect('mongodb://127.0.0.1/youtube');  

    app.listen(3000);   

    console.log('Sėkmingai prisijungta prie duomenų bazės');
} catch {
    console.log('Nepavyko prisijungti prie duomenų bazės');
}


// MVC 
// Model - Duomenu bazes kolekcijos modelis
// View - HTML sablonas
// Controller - Route'ai

// ORM - Object Oriented Modeling