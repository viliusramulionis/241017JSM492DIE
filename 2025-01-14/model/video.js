import { Schema, model } from 'mongoose';

export default model('Videos', new Schema({
    title: {
        type: String,
        minLength: [5, 'Per trumpas video įrašo pavadinimas'], // Nurodymas, jog pavadinimas privalo būti minimum 5 simbolių ilgio
        maxLength: [100, 'Video įrašo pavadinimas turi būti ne ilgesnis nei 100 simbolių'], // Nurodymas, jog pavadinimas negali būti ilgesnis nei 100 simbolių
        required: [true, 'Pavadinimo laukelis yra privalomas'] //Nurodymas, jog reikšmė yra privaloma
    },
    description: String,
    photo: String,
    videoURL: String,
    category: String,
    // One to Many ryšio priskyrimas:
    userId: Schema.Types.ObjectId,
    // Laiko Žymų (timestamp) sukūrimas:
    createdAt: {
        type: Date,
        // Dabartinė data ir laikas priskiriamas pagal nutylėjimą:
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
// Pirmu parametru nurodome savybės pavadinimą:
// Antru parametru susiejimo informaciją
}, {
    virtuals: {
        user: {
            options: {
                // Registruotas modelio pavadinimas mongoose objekte
                ref: 'Users',
                // Videos modelyje patalpintas laukelis
                localField: 'userId',
                // Users modelyje esanti laukelio userId reikšmė
                foreignField: '_id',
                // Pasirinkimas ar norime tik vieno priskirto įrašo:
                justOne: true
            }
        }
    },
    toJSON: {
        virtuals: true
    }
}));



