"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUserProjectsController = void 0;

var _ListUserProjectsUseCase = require("./ListUserProjectsUseCase");

var _tsyringe = require("tsyringe");

class ListUserProjectsController {
  async handle(request, response) {
    const {
      category
    } = request.query;
    const email = request.user.email;

    const createCategoryUseCase = _tsyringe.container.resolve(_ListUserProjectsUseCase.ListUserProjectsUseCase);

    const projects = await createCategoryUseCase.execute({
      email,
      category
    });
    return response.json(projects);
  }

}

exports.ListUserProjectsController = ListUserProjectsController;