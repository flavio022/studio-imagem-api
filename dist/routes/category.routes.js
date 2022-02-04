"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryRoutes = void 0;

var _express = require("express");

var _ListCategoryController = require("../modules/categories/usecases/listCategories/ListCategoryController");

var _CreateCategoryController = require("../modules/categories/usecases/createCategory/CreateCategoryController");

var _DelteCategoryController = require("../modules/categories/usecases/delteCategory/DelteCategoryController");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoryRoutes = (0, _express.Router)();
exports.categoryRoutes = categoryRoutes;
const createCategoryController = new _CreateCategoryController.CreateCategoryController();
const listCategoryController = new _ListCategoryController.ListCategoryController();
const deleteCategoryController = new _DelteCategoryController.DeleteProjectController();
categoryRoutes.use(_ensureAuthenticated.ensureAuthetnticated);
categoryRoutes.post("/", createCategoryController.handler);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.delete("/:id", deleteCategoryController.handle);