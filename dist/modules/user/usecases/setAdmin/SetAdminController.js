"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetAdminController = void 0;

var _SetAdminUseCase = require("./SetAdminUseCase");

var _tsyringe = require("tsyringe");

class SetAdminController {
  async handle(request, response) {
    const {
      email,
      isAdmin
    } = request.body;

    const setAdminUseCase = _tsyringe.container.resolve(_SetAdminUseCase.SetAdminUseCase);

    console.log(email);
    await setAdminUseCase.execute({
      email,
      isAdmin
    });
    return response.status(201).send();
  }

}

exports.SetAdminController = SetAdminController;