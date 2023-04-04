"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monk = void 0;
const mongoose_1 = require("mongoose");
const monkSchema = new mongoose_1.Schema({
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
    trans_monk: {
        type: Date,
    },
    birth_date: {
        type: Date,
        required: true,
    }
});
exports.Monk = (0, mongoose_1.model)('monk', monkSchema);
//# sourceMappingURL=monk-model.js.map