"use strict";
exports.__esModule = true;
exports.categoryRoutes = void 0;
var express_1 = require("express");
var ListCategoryController_1 = require("../modules/categories/usecases/listCategories/ListCategoryController");
var CreateCategoryController_1 = require("../modules/categories/usecases/createCategory/CreateCategoryController");
var DelteCategoryController_1 = require("../modules/categories/usecases/delteCategory/DelteCategoryController");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var categoryRoutes = express_1.Router();
exports.categoryRoutes = categoryRoutes;
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
var listCategoryController = new ListCategoryController_1.ListCategoryController();
var deleteCategoryController = new DelteCategoryController_1.DeleteProjectController();
categoryRoutes.post("/", createCategoryController.handler);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes["delete"]("/:id", deleteCategoryController.handle);
categoryRoutes.use(ensureAuthenticated_1.ensureAuthetnticated);
