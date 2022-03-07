"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveUserController = void 0;

var _ActiveUserUseCase = require("./ActiveUserUseCase");

var _tsyringe = require("tsyringe");

class ActiveUserController {
  async handle(request, response) {
    const {
      email,
      isActive
    } = request.body;

    const activeUserUseCase = _tsyringe.container.resolve(_ActiveUserUseCase.ActiveUserUseCase);

    await activeUserUseCase.execute({
      email,
      isActive
    });
    return response.status(201).send();
  }

}

exports.ActiveUserController = ActiveUserController;