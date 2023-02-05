"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.protectRoute = exports.createJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../config");
var createJwt = function (user) {
    return jsonwebtoken_1["default"].sign({ id: user.id, email: user.email }, config_1.appEnv.jwtSecret);
};
exports.createJwt = createJwt;
var protectRoute = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401).send({ success: false, detail: 'Not Authorized' });
        return;
    }
    var _a = bearer.split(' '), token = _a[1];
    if (!token) {
        res.status(401).send({ success: false, detail: 'Not Authorized' });
        return;
    }
    try {
        req.user = jsonwebtoken_1["default"].verify(token, config_1.appEnv.jwtSecret);
        next();
    }
    catch (err) {
        res.status(401).send({ success: false, detail: 'Not Authorized', message: err.message });
        return;
    }
};
exports.protectRoute = protectRoute;
//# sourceMappingURL=auth.js.map