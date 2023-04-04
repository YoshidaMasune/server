import { Schema, model } from "mongoose";

export interface userType {
    first_name: string,
    last_name: string,
    phone: string,
    address?: Schema.Types.ObjectId
}

const userSchema = new Schema<userType>({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

export const User = model('user', userSchema);
