"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteProjectUseCase = void 0;

var _IProjectRepository = require("../../repositories/IProjectRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let DeleteProjectUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProjectRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProjectRepository.IProjectRepository === "undefined" ? Object : _IProjectRepository.IProjectRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteProjectUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(id) {
    console.log(id);
    await this.projectRepository.delete(id);
  }

}) || _class) || _class) || _class) || _class);
exports.DeleteProjectUseCase = DeleteProjectUseCase;