"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUserProjectsUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IProjectRepository = require("../../repositories/IProjectRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListUserProjectsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProjectRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProjectRepository.IProjectRepository === "undefined" ? Object : _IProjectRepository.IProjectRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListUserProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute({
    email,
    category
  }) {
    const projects = await this.projectRepository.listUserProjects(email, category);
    return projects;
  }

}) || _class) || _class) || _class) || _class);
exports.ListUserProjectsUseCase = ListUserProjectsUseCase;