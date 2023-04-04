
import { model, Schema } from 'mongoose'

export const Nimone = model('nimone', new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    work: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'work'
    },
    monk: [{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'monk'
    }],
    own: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    }
}, {timestamps: true}))