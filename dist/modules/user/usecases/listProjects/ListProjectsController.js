"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProjectsController = void 0;

var _tsyringe = require("tsyringe");

var _ListProjectsUseCase = require("./ListProjectsUseCase");

var _dec, _class;

let ListProjectsController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ListProjectsController {
  async handle(request, response) {
    const listProjectsUseCase = _tsyringe.container.resolve(_ListProjectsUseCase.ListProjectsUseCase);

    const projects = await listProjectsUseCase.execute();
    return response.json(projects);
  }

}) || _class);
exports.ListProjectsController = ListProjectsController;