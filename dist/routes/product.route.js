"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productRouter = (0, express_1.Router)();
productRouter.get('/', function (req, res) {
    res.send({ success: true, data: [] });
});
productRouter.get('/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
productRouter.post('/', function (req, res) {
    res.status(201).send({ success: true, data: [] });
});
productRouter.put('/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
productRouter["delete"]('/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
exports["default"] = productRouter;
//# sourceMappingURL=product.route.js.map