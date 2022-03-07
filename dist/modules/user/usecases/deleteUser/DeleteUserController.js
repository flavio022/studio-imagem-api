"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserContoller = void 0;

var _tsyringe = require("tsyringe");

var _DeleteUserUseCase = require("./DeleteUserUseCase");

class DeleteUserContoller {
  async handle(request, response) {
    const {
      id
    } = request.params;

    const delteUserUseCase = _tsyringe.container.resolve(_DeleteUserUseCase.DeleteUserUseCase);

    delteUserUseCase.execute(id);
    return response.status(201).send();
  }

}

exports.DeleteUserContoller = DeleteUserContoller;