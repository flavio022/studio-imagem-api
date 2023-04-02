"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/user/usecases/createUser/CreateUserController");
var ListCategoryController_1 = require("../modules/user/usecases/listUser/ListCategoryController");
var DeleteUserController_1 = require("../modules/user/usecases/deleteUser/DeleteUserController");
var SetAdminController_1 = require("../modules/user/usecases/setAdmin/SetAdminController");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var ActiveUserController_1 = require("../modules/user/usecases/activeUser/ActiveUserController");
var userRoutes = express_1.Router();
exports.userRoutes = userRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var listUserController = new ListCategoryController_1.ListUserController();
var delteUserController = new DeleteUserController_1.DeleteUserContoller();
var setAdminController = new SetAdminController_1.SetAdminController();
var activeUserController = new ActiveUserController_1.ActiveUserController();
userRoutes.post("/", createUserController.handle);
userRoutes.put("/enableUser", activeUserController.handle);
userRoutes.use(ensureAuthenticated_1.ensureAuthetnticated);
userRoutes.get("/", listUserController.handle);
userRoutes.delete("/:id", delteUserController.handle);
userRoutes.put("/admin", setAdminController.handle);
