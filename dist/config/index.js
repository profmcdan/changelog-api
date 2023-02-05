"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
exports.appEnv = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
exports.appEnv = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001,
    dbUrl: (_b = process.env.DATABASE_URL) !== null && _b !== void 0 ? _b : ''
};
//# sourceMappingURL=index.js.map