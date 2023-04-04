"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.work_route = void 0;
const express_1 = require("express");
const work_controller_1 = require("../controllers/work-controller");
const work_route = function () {
    const router = (0, express_1.Router)();
    router.get('/', work_controller_1.createNewWork);
    router.get('/:id', (req, res) => {
        res.send(req.params);
    });
    return router;
};
exports.work_route = work_route;
//# sourceMappingURL=work-route.js.map