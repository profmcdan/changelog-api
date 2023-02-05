"use strict";
exports.__esModule = true;
exports.customMiddleware = void 0;
var customMiddleware = function (message) { return function (req, res, next) {
    console.log(message);
    console.log('Custom Middleware Test...');
    next();
}; };
exports.customMiddleware = customMiddleware;
//# sourceMappingURL=index.js.map