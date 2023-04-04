"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewWork = void 0;
const createNewWork = (req, res, next) => {
    const { user, address, work } = req.body;
    // if no address Data, then save user Data's and work Data's
    // else with address
    try {
        res.send(req.baseUrl);
    }
    catch (error) {
        console.log(error);
    }
};
exports.createNewWork = createNewWork;
//# sourceMappingURL=work-controller.js.map