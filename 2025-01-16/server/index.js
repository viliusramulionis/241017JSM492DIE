import express from 'express';
import mongoose from 'mongoose';
import users from './controller/users.js';
import session from 'express-session';

const app = express();

await mongoose.connect('mongodb://127.0.0.1:27017/auth')

// Nurodymas, jog priimsi slapuko duomenis per proxy
app.set('trust proxy', 1) 
// Sesijos konfiguracija:
app.use(session({
  secret: 'Slapta unikali frazė', // Slapta unikali frazė
  resave: false, // Leidžiame slapuko perrašymą
  saveUninitialized: true, // Išduodame sausainėlį nepriskyrus jokių reikšmių
  cookie: { secure: false } // Secure nurodo ar kreipsimės per HTTPS protokolą
}));

// Development phase - Kuomet gaminame aplikaciją
// Production phase - Kuomet aplikacija yra talpinama viešai

app.use(express.json());

app.use('/api', users);

app.listen(3000);