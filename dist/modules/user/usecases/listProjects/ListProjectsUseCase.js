"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProjectsUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IProjectRepository = require("../../repositories/IProjectRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListProjectsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProjectRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProjectRepository.IProjectRepository === "undefined" ? Object : _IProjectRepository.IProjectRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute() {
    const projects = await this.projectRepository.listAllProjects();
    return projects;
  }

}) || _class) || _class) || _class) || _class);
exports.ListProjectsUseCase = ListProjectsUseCase;