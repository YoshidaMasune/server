"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
    },
    address: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'address'
    }
});
exports.User = (0, mongoose_1.model)('user', userSchema);
//# sourceMappingURL=user-model.js.map