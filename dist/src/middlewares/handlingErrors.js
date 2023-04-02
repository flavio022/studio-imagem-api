"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlingErrors = void 0;
var AppError_1 = require("../errors/AppError");
function handlingErrors(err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error: \n" + err.message,
    });
    next();
}
exports.handlingErrors = handlingErrors;
