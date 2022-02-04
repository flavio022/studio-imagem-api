"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectRepository = void 0;

var _AppError = require("../../../../errors/AppError");

var _typeorm = require("typeorm");

var _Project = require("../../entities/Project");

class ProjectRepository {
  constructor() {
    this.projectRepository = void 0;
    this.projectRepository = (0, _typeorm.getRepository)(_Project.Project);
  }

  async delete(id) {
    const project = await this.projectRepository.findOne(id);

    if (!project) {
      throw new _AppError.AppError("project does no exist!", 401);
    }

    await this.projectRepository.delete(id);
  }

  async listAllProjects() {
    const projects = await this.projectRepository.find();
    return projects;
  }

  async listByUserEmail(user_email) {
    const project = await this.projectRepository.find({
      where: {
        user_email: user_email
      }
    });
    return project;
  }

  async create({
    category,
    company,
    image,
    user_email
  }) {
    const specification = this.projectRepository.create({
      category,
      company,
      image,
      user_email
    });
    await this.projectRepository.save(specification);
  }

}

exports.ProjectRepository = ProjectRepository;