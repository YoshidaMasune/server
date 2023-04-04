"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill_NULL_request_body = void 0;
const fill_NULL_request_body = (req, res, next) => {
    const userBaseUrl = '/api/user';
    const workBaseUrl = '/api/workes';
    try {
        switch (req.method) {
            case 'GET':
                next();
                break;
            case 'POST':
                if (req.baseUrl.includes(userBaseUrl)) {
                    next();
                }
                else if (req.baseUrl.includes(workBaseUrl)) {
                    next();
                }
            default:
                break;
        }
    }
    catch (err) {
        res.send(err);
        console.log(err);
    }
};
exports.fill_NULL_request_body = fill_NULL_request_body;
//# sourceMappingURL=fillRequest.js.map