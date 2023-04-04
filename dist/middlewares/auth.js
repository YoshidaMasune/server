"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const authToken = function (req, res, next) {
    const token = req.headers['access-token'];
};
exports.authToken = authToken;
//# sourceMappingURL=auth.js.map