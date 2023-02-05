"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.status(200).json({ message: 'Auth Service up!!' });
});
exports["default"] = app;
//# sourceMappingURL=server.js.map