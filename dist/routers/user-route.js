"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_router = void 0;
const express_1 = require("express");
const user_router = function () {
    const router = (0, express_1.Router)();
    router.get('/users/:id', (req, res) => {
        res.send('test api at users');
    });
    return router;
};
exports.user_router = user_router;
//# sourceMappingURL=user-route.js.map