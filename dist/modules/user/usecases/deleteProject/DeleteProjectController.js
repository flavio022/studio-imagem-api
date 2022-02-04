"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteProjectController = void 0;

var _tsyringe = require("tsyringe");

var _DeleteProjectUseCase = require("./DeleteProjectUseCase");

class DeleteProjectController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    console.log(id);

    const listProjectsUseCase = _tsyringe.container.resolve(_DeleteProjectUseCase.DeleteProjectUseCase);

    listProjectsUseCase.execute(id);
    return response.status(201).send();
  }

}

exports.DeleteProjectController = DeleteProjectController;