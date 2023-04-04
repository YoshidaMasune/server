"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const workSchema = new mongoose_1.Schema({
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
        default: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)
    },
    detail: {
        type: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    address: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    }
});
//# sourceMappingURL=work-model.js.map