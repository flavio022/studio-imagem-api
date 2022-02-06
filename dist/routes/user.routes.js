"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;

var _express = require("express");

var _CreateUserController = require("../modules/user/usecases/createUser/CreateUserController");

var _ListCategoryController = require("../modules/user/usecases/listUser/ListCategoryController");

const userRoutes = (0, _express.Router)();
exports.userRoutes = userRoutes;
const createUserController = new _CreateUserController.CreateUserController();
const listUserController = new _ListCategoryController.ListUserController();
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUserController.handler);