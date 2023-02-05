"use strict";
exports.__esModule = true;
var express_1 = require("express");
var updateRouter = (0, express_1.Router)();
updateRouter.get('/', function (req, res) {
    res.send({ success: true, data: [] });
});
updateRouter.get('/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
updateRouter.post('/', function (req, res) {
    res.status(201).send({ success: true, data: [] });
});
updateRouter.put('/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
updateRouter["delete"]('/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
/**
 * Update Points
 */
updateRouter.get('/point', function (req, res) {
    res.send({ success: true, data: [] });
});
updateRouter.get('/point/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
updateRouter.post('/point', function (req, res) {
    res.status(201).send({ success: true, data: [] });
});
updateRouter.put('/point/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
updateRouter["delete"]('/point/:id', function (req, res) {
    res.send({ success: true, data: [] });
});
exports["default"] = updateRouter;
//# sourceMappingURL=update.route.js.map