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
    const {
      category
    } = request.query;
    console.log(category);

    const createCategoryUseCase = _tsyringe.container.resolve(_ListProjectsByEmailUseCase.ListProjectsByEmailUseCase);

    if (category === undefined) {
      console.log("vazio");
    }

    const projects = await createCategoryUseCase.execute({
      email,
      category
    });
    return response.json(projects);
  }

}

exports.ListProjectsByEmailController = ListProjectsByEmailController;