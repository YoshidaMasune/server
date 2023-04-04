import {Schema, model} from 'mongoose';

const monkSchema = new Schema({
    prefix: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    jaya: {
        type: String,
    },
    phone: {
        type: String,
    }
});

export const Monk = model('monk', monkSchema);