import {model, Schema} from 'mongoose';

export const Address = model('address', new Schema({
    house: {
        type: String,
        required: true
    },
    sub_disrtrict: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps: true}))