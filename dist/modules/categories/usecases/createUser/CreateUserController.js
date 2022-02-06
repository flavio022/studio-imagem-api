"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _CreateUserUseCase = require("./CreateUserUseCase");

var _tsyringe = require("tsyringe");

class CreateUserController {
  async handle(request, response) {
    const {
      name,
      email,
      password
    } = request.body;

    const createCategoryUseCase = _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);

    await createCategoryUseCase.execute({
      name,
      email,
      password
    });
    return response.status(201).send();
  }

}

exports.CreateUserController = CreateUserController;