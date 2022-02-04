"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProjectController = void 0;

var _CreateProjectUseCase = require("./CreateProjectUseCase");

var _tsyringe = require("tsyringe");

class CreateProjectController {
  async handler(request, response) {
    const {
      category,
      company,
      user_email
    } = request.body;
    const image = request.file.filename;

    const createProjectUseCase = _tsyringe.container.resolve(_CreateProjectUseCase.CreateProjectUseCase);

    await createProjectUseCase.execute({
      category,
      company,
      image,
      user_email
    });
    return response.status(201).send();
  }

}

exports.CreateProjectController = CreateProjectController;