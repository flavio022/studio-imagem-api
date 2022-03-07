"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProjectController = void 0;

var _CreateProjectUseCase = require("./CreateProjectUseCase");

var _tsyringe = require("tsyringe");

class CreateProjectController {
  async handler(request, response) {
    let {
      category,
      user_email,
      isPrivate
    } = request.body;

    if (isPrivate === 'true') {
      isPrivate = true;
    } else {
      isPrivate = false;
    }

    const image = request.file.filename;

    const createProjectUseCase = _tsyringe.container.resolve(_CreateProjectUseCase.CreateProjectUseCase);

    await createProjectUseCase.execute({
      category,
      image,
      user_email,
      isPrivate
    });
    return response.status(201).send();
  }

}

exports.CreateProjectController = CreateProjectController;