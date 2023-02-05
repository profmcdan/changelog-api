"use strict";
exports.__esModule = true;
exports.customMiddleware = void 0;
var customMiddleware = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};
exports.customMiddleware = customMiddleware;
//# sourceMappingURL=index.js.map