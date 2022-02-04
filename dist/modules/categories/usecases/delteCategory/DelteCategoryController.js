"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteProjectController = void 0;

var _tsyringe = require("tsyringe");

var _DeleteCategoryUseCase = require("./DeleteCategoryUseCase");

class DeleteProjectController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    console.log(id);

    const listCategoryUseCase = _tsyringe.container.resolve(_DeleteCategoryUseCase.DeleteCategoryUseCase);

    listCategoryUseCase.execute(id);
    return response.status(201).send();
  }

}

exports.DeleteProjectController = DeleteProjectController;