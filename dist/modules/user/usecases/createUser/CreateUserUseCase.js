"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;

var _IUserRepository = require("../../repositories/IUserRepository");

var _tsyringe = require("tsyringe");

var _bcryptjs = require("bcryptjs");

var _AppError = require("../../../../errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    name,
    email,
    company,
    address,
    password
  }) {
    const categoryAlreadyExists = await this.userRepository.findByEmail(email);

    if (categoryAlreadyExists) {
      throw new _AppError.AppError("User already exist!", 401);
    }

    const passwordHash = await (0, _bcryptjs.hash)(password, 8);
    await this.userRepository.create({
      name,
      email,
      company,
      address,
      password: passwordHash
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateUserUseCase = CreateUserUseCase;