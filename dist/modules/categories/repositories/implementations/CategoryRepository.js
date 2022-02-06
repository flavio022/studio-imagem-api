"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryRepository = void 0;

var _AppError = require("../../../../errors/AppError");

var _typeorm = require("typeorm");

var _Category = require("../../entities/Category");

class CategoryRepository {
  constructor() {
    this.categoryRepository = void 0;
    this.categoryRepository = (0, _typeorm.getRepository)(_Category.Category);
  }

  async ListAll() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async delete(id) {
    const project = await this.categoryRepository.findOne(id);

    if (!project) {
      throw new _AppError.AppError("project does no exist!", 401);
    }

    await this.categoryRepository.delete(id);
  }

  async create({
    name
  }) {
    const category = this.categoryRepository.create({
      name
    });
    await this.categoryRepository.save(category);
  }

}

exports.CategoryRepository = CategoryRepository;