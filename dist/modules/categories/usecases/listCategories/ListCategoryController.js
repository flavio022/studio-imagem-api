"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoryController = void 0;

var _tsyringe = require("tsyringe");

var _ListCategoryUseCase = require("./ListCategoryUseCase");

var _dec, _class;

let ListCategoryController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ListCategoryController {
  async handle(request, response) {
    const listCategoryUseCase = _tsyringe.container.resolve(_ListCategoryUseCase.ListCategoryUseCase);

    const projects = await listCategoryUseCase.execute();
    return response.json(projects);
  }

}) || _class);
exports.ListCategoryController = ListCategoryController;