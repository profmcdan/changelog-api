"use strict";
exports.__esModule = true;
var express_1 = require("express");
var auth_1 = require("../modules/auth");
var userRouter = (0, express_1.Router)();
userRouter.get('/', auth_1.protectRoute, function (req, res) {
    res.send({ success: true, data: [] });
});
userRouter.get('/:id', function (req, res) {
    res.send({ success: true, data: {} });
});
userRouter.post('/', function (req, res) {
    res.status(201).send({ success: true, data: {} });
});
userRouter.put('/:id', function (req, res) {
    res.send({ success: true, data: {} });
});
userRouter["delete"]('/:id', function (req, res) {
    res.send({ success: true });
});
exports["default"] = userRouter;
//# sourceMappingURL=user.route.js.map