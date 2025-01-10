import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Norodymas serveryje priimti informacija persiunciama json formatu
app.use(express.json());

await mongoose.connect('mongodb://127.0.0.1:27017/blog');

const Posts = mongoose.model('Posts', {
    title: String,
    photo: String,
    excerpt: String,
    description: String,
    author: String
});

// Visų blogo įrašų paėmimas
app.get('/api', async (req, res) => {
    try {
        // Pagal nutylejima yra siunciamas 200 statuso kodas
        res.json(await Posts.find());
    } catch {
        // Norint pakeisti atsakymo statuso koda
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

// Vieno blogo įrašo paėmimas
app.get('/api/:id', async (req, res) => {
    try {
        // Pagal nutylejima yra siunciamas 200 statuso kodas
        res.json(await Posts.findById(req.params.id));
    } catch {
        // Norint pakeisti atsakymo statuso koda
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

// Įrašo pridėjimas
app.post('/api', async (req, res) => {
    try {
        await Posts.create(req.body);
        res.json('Įrašas sėkmingai sukurtas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Įrašo modifikavimas
app.put('/api/:id', async (req, res) => {
    try {
        await Posts.findByIdAndUpdate(req.params.id, req.body);
        res.json('Įrašas sėkmingai atnaujintas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Įrašo ištrynimas
app.delete('/api/:id', async (req, res) => {
    try {
        await Posts.findByIdAndDelete(req.params.id);
        res.json('Įrašas sėkmingai ištrintas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

app.listen(3000);