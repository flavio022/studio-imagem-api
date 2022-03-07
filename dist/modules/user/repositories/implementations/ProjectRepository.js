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

  async listAllProjects(category) {
    var projects = null;
    console.log(category);

    if (category !== undefined) {
      console.log("private udnie");
      projects = await this.projectRepository.find({
        where: {
          category,
          isPrivate: false
        }
      });
    } else {
      console.log("private flase");
      projects = await this.projectRepository.find({
        where: {
          isPrivate: false
        }
      });
    }

    return projects;
  }

  async listByUserEmail(user_email, category) {
    var project = null;

    if (category === undefined) {
      project = await this.projectRepository.find({
        where: {
          user_email: user_email
        }
      });
    } else {
      project = await this.projectRepository.find({
        where: {
          user_email: user_email,
          category: category
        }
      });
    }

    return project;
  }

  async listUserProjects(user_email, category) {
    var project = null;

    if (category === undefined) {
      project = await this.projectRepository.find({
        where: {
          user_email: user_email,
          isPrivate: true
        }
      });
    } else {
      project = await this.projectRepository.find({
        where: {
          user_email: user_email,
          category: category,
          isPrivate: true
        }
      });
    }

    return project;
  }

  async create({
    category,
    image,
    user_email,
    isPrivate
  }) {
    console.log(isPrivate);
    const specification = this.projectRepository.create({
      category,
      image,
      user_email,
      isPrivate
    });
    await this.projectRepository.save(specification);
  }

}

exports.ProjectRepository = ProjectRepository;