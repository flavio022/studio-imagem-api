"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUserController = void 0;

var _tsyringe = require("tsyringe");

var _ListUserUseCase = require("./ListUserUseCase");

class ListUserController {
  async handler(request, response) {
    const listUserUseCase = _tsyringe.container.resolve(_ListUserUseCase.ListUserUseCase);

    const usersList = await listUserUseCase.execute();
    return response.json(usersList);
  }

}

exports.ListUserController = ListUserController;