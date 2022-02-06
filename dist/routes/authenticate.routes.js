"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateRoutes = void 0;

var _AuthenticateUserController = require("../modules/accounts/usecases/authenticate/AuthenticateUserController");

var _express = require("express");

const authenticateRoutes = (0, _express.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateController = new _AuthenticateUserController.AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateController.handle);