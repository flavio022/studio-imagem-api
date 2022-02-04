"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectRoutes = void 0;

var _express = require("express");

var _CreateProjectController = require("../modules/user/usecases/createProject/CreateProjectController");

var _ListProjectsController = require("../modules/user/usecases/listProjects/ListProjectsController");

var _ListUserProjectsController = require("../modules/user/usecases/listUserProjects/ListUserProjectsController");

var _ListProjectsByEmailController = require("../modules/user/usecases/listProjectsByEmail/ListProjectsByEmailController");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../config/upload"));

var _DeleteProjectController = require("../modules/user/usecases/deleteProject/DeleteProjectController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projectRoutes = (0, _express.Router)();
exports.projectRoutes = projectRoutes;
const createProjectController = new _CreateProjectController.CreateProjectController();
const listProjectsController = new _ListProjectsController.ListProjectsController();
const listUserProjectsController = new _ListUserProjectsController.ListUserProjectsController();
const listProjectsByEmailController = new _ListProjectsByEmailController.ListProjectsByEmailController();
const deleteProjectController = new _DeleteProjectController.DeleteProjectController();
const uploadAvatar = (0, _multer.default)(_upload.default);
projectRoutes.use(_ensureAuthenticated.ensureAuthetnticated);
projectRoutes.post("/", uploadAvatar.single("image"), createProjectController.handler);
projectRoutes.get("/", listProjectsController.handle);
projectRoutes.get("/me", listUserProjectsController.handle);
projectRoutes.get("/all", listProjectsByEmailController.handle);
projectRoutes.delete("/:id", deleteProjectController.handle);