"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimone_api = void 0;
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
// import Routers
const work_route_1 = require("./routers/work-route");
const user_route_1 = require("./routers/user-route");
const fillRequest_1 = require("./middlewares/fillRequest");
const nimone_api = function () {
    const app = (0, express_1.default)();
    dotenv_1.default.config();
    const MONGO_URI = 'mongodb+srv://nateedevmonk:nateedevmonk@cluster0.xd8xdxf.mongodb.net/?retryWrites=true&w=majority';
    const PORT = 4000;
    // set middlewares
    app.use((0, express_1.urlencoded)({ extended: false }));
    app.use(express_1.default.json());
    // set routes
    app.use('/api/users', fillRequest_1.fill_NULL_request_body, (0, user_route_1.user_router)());
    app.use('/api/workes', fillRequest_1.fill_NULL_request_body, (0, work_route_1.work_route)());
    // connect mongoose
    mongoose_1.default.connect(MONGO_URI)
        .then(() => app.listen(PORT, () => {
        console.log(`server run at http://localhost:${PORT}`);
    }))
        .catch(err => {
        console.log(err);
    });
};
exports.nimone_api = nimone_api;
//# sourceMappingURL=app.js.map