"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
var AuthenticateUserController_1 = require("../modules/accounts/usecases/authenticate/AuthenticateUserController");
var express_1 = require("express");
var authenticateRoutes = express_1.Router();
exports.authenticateRoutes = authenticateRoutes;
var authenticateController = new AuthenticateUserController_1.AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateController.handle);
