"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProjectsByEmailController = void 0;

var _ListProjectsByEmailUseCase = require("./ListProjectsByEmailUseCase");

var _tsyringe = require("tsyringe");

class ListProjectsByEmailController {
  async handle(request, response) {
    const {
      email
    } = request.headers;

    const createCategoryUseCase = _tsyringe.container.resolve(_ListProjectsByEmailUseCase.ListProjectsByEmailUseCase);

    const projects = await createCategoryUseCase.execute({
      email
    });
    return response.json(projects);
  }

}

exports.ListProjectsByEmailController = ListProjectsByEmailController;