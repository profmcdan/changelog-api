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
exports.__esModule = true;
exports.userRouter = exports.updateRouter = exports.productRouter = void 0;
var product_route_1 = require("./product.route");
__createBinding(exports, product_route_1, "default", "productRouter");
var update_route_1 = require("./update.route");
__createBinding(exports, update_route_1, "default", "updateRouter");
var user_route_1 = require("./user.route");
__createBinding(exports, user_route_1, "default", "userRouter");
//# sourceMappingURL=index.js.map