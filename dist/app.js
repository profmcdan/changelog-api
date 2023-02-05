"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importStar(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var middleware_1 = require("./middleware");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use((0, morgan_1["default"])('dev'));
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use(middleware_1.customMiddleware);
app.use('/api/v1/users', routes_1.userRouter);
app.use('/api/v1/products', routes_1.productRouter);
app.use('/api/v1/updates', routes_1.updateRouter);
app.get('/', function (req, res) {
    res.status(200).json({ message: 'Auth Service up!!' });
});
app.all('*', function (req, res) {
    res.status(404).json({ message: "Route ".concat(req.originalUrl, " not found") });
});
exports["default"] = app;
//# sourceMappingURL=app.js.map