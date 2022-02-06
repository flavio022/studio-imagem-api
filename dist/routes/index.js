"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _user = require("./user.routes");

var _project = require("./project.routes");

var _authenticate = require("./authenticate.routes");

var _category = require("./category.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use("/users", _user.userRoutes);
router.use("/projects", _project.projectRoutes);
router.use("/categories", _category.categoryRoutes);
router.use(_authenticate.authenticateRoutes);