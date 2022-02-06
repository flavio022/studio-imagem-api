"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlingErrors = handlingErrors;

var _AppError = require("../errors/AppError");

function handlingErrors(err, request, response, next) {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error: \n${err.message}`
  });
  next();
}