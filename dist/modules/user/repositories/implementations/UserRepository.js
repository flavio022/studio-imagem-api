"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _typeorm = require("typeorm");

var _User = require("../../entities/User");

class UserRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_User.User);
  }

  async findById(id) {
    const user = await this.repository.findOne(id);
    return user;
  }

  async create({
    name,
    company,
    address,
    email,
    password
  }) {
    const category = this.repository.create({
      name,
      company,
      address,
      email,
      password
    });
    await this.repository.save(category);
  }

  async list() {
    const categories = await this.repository.find();
    return categories;
  }

  async findByEmail(email) {
    const category = await this.repository.findOne({
      email
    });
    return category;
  }

}

exports.UserRepository = UserRepository;