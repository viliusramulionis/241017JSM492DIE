import { Schema, model } from 'mongoose';

export default model('Users', new Schema({
    firstName: {
        type: String,
        required: true //Nurodymas, jog reikšmė yra privaloma
    },
    lastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    channelName: String,
    userPhoto: String,
    coverPhoto: String,
    description: String,
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
}));