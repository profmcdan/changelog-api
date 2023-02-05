"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("./app"));
var config_1 = require("./config");
app_1["default"].listen(config_1.appEnv.port, function () {
    console.log("Auth service up on http://localhost:".concat(config_1.appEnv.port));
});
//# sourceMappingURL=index.js.map