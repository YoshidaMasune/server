import {Schema, model} from 'mongoose';

const workSchema = new Schema({
    work_name: {
        type: String,
        required: true
    },
    monk: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
        default: new Date( new Date().getFullYear(), new Date().getMonth(),new Date().getDate()+1)
    },
    phone: {
        type: String,
        required: true
    },
    detail: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps: true})

export const Work = model('work', workSchema)