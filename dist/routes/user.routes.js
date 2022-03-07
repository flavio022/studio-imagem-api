"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;

var _express = require("express");

var _CreateUserController = require("../modules/user/usecases/createUser/CreateUserController");

var _ListCategoryController = require("../modules/user/usecases/listUser/ListCategoryController");

var _DeleteUserController = require("../modules/user/usecases/deleteUser/DeleteUserController");

var _SetAdminController = require("../modules/user/usecases/setAdmin/SetAdminController");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _ActiveUserController = require("../modules/user/usecases/activeUser/ActiveUserController");

const userRoutes = (0, _express.Router)();
exports.userRoutes = userRoutes;
const createUserController = new _CreateUserController.CreateUserController();
const listUserController = new _ListCategoryController.ListUserController();
const delteUserController = new _DeleteUserController.DeleteUserContoller();
const setAdminController = new _SetAdminController.SetAdminController();
const activeUserController = new _ActiveUserController.ActiveUserController();
userRoutes.post("/", createUserController.handle);
userRoutes.use(_ensureAuthenticated.ensureAuthetnticated);
userRoutes.get("/", listUserController.handle);
userRoutes.delete("/:id", delteUserController.handle);
userRoutes.put("/admin", setAdminController.handle);
userRoutes.put("/enableUser", activeUserController.handle);