"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/user/usecases/createUser/CreateUserController");
var ListCategoryController_1 = require("../modules/user/usecases/listUser/ListCategoryController");
var userRoutes = express_1.Router();
exports.userRoutes = userRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var listUserController = new ListCategoryController_1.ListUserController();
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUserController.handler);