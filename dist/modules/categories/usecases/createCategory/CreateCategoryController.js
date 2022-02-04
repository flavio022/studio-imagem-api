"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCategoryController = void 0;

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

var _tsyringe = require("tsyringe");

class CreateCategoryController {
  async handler(request, response) {
    const {
      name
    } = request.body;

    const createProjectUseCase = _tsyringe.container.resolve(_CreateCategoryUseCase.CreateCategoryUseCase);

    await createProjectUseCase.execute({
      name
    });
    return response.status(201).send();
  }

}

exports.CreateCategoryController = CreateCategoryController;