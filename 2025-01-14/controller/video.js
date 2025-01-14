import { Router } from 'express';
import Video from '../model/video.js'; 
import User from '../model/user.js';

const router = Router();

// Visi video irasai
router.get('/', async (req, res) => {
    try {
        // Pagal nutylejima yra siunciamas 200 statuso kodas
        const data = await Video.find()
                                //Pirmas parametras virtual reikšmė antras parametras reikšmės kurias imame iš vartotojo kolekcijos
                                .populate('user', ['channelName', 'userPhoto']);

        // console.log(data);
        res.json(data);
    } catch(err) {
        console.log(err);
        // Norint pakeisti atsakymo statuso koda
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Vienas video irasas
router.get('/:id', async (req, res) => {
    try {
        res.json(await Video.findById(req.params.id));
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Iraso sukurimas
router.post('/', async (req, res) => {
    try {
        await Video.create(req.body);

        res.json('Įrašas sėkmingai išsaugotas');
    } catch(err) {
        // Validacijos klaidos susigrąžinimas
        console.log(err.message);

        res.status(500).json('Įvyko serverio klaida');
    }
});

// Iraso redagavimas
router.put('/:id', async (req, res) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, req.body)
        res.json('Video įrašas sėkmingai atnaujintas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

// Iraso istrynimas
router.delete('/:id', async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id)
        res.json('Video įrašas sėkmingai ištrintas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

export default router;