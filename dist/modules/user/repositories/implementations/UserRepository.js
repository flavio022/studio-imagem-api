"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _AppError = require("../../../../errors/AppError");

var _typeorm = require("typeorm");

var _User = require("../../entities/User");

class UserRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_User.User);
  }

  async enableUser({
    email,
    isActive
  }) {
    const user = await this.repository.findOne({
      email
    });

    if (!user) {
      throw new _AppError.AppError("User not found!", 401);
    }

    user.isActiveted = isActive;
    await this.repository.save(user);
  }

  async setAdmin({
    email,
    isAdmin
  }) {
    const user = await this.repository.findOne({
      email
    });

    if (!user) {
      throw new _AppError.AppError("User not found!", 401);
    }

    user.isAdmin = isAdmin;
    await this.repository.save(user);
  }

  async delete(id) {
    const user = this.findById(id);

    if (!user) {
      throw new _AppError.AppError("User not found!", 401);
    }

    await this.repository.delete(id);
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
    const user = this.repository.create({
      name,
      company,
      address,
      email,
      password
    });
    await this.repository.save(user);
  }

  async list() {
    const users = await this.repository.find();
    return users;
  }

  async findByEmail(email) {
    const user = await this.repository.findOne({
      email
    });
    return user;
  }

}

exports.UserRepository = UserRepository;