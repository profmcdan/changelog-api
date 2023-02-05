"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.use('/api/v1/users', routes_1.userRouter);
app.use('/api/v1/products', routes_1.productRouter);
app.use('/api/v1/updates', routes_1.updateRouter);
app.get('/', function (req, res) {
    res.status(200).json({ message: 'Auth Service up!!' });
});
exports["default"] = app;
//# sourceMappingURL=app.js.map