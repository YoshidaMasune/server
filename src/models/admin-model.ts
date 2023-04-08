import { Schema, model } from 'mongoose'

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
}, { timestamps: true });


export const Admin = model('admin', adminSchema)