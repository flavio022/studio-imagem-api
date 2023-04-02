"use strict";
exports.__esModule = true;
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
    return AppError;
}());
exports.AppError = AppError;
