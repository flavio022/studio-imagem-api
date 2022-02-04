"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserUseCase = void 0;

var _IUserRepository = require("../../../user/repositories/IUserRepository");

var _tsyringe = require("tsyringe");

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = require("../../../../errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let AuthenticateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AuthenticateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.AppError("Email or password incorrect", 401);
    }

    const passwordMatch = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordMatch) {
      throw new _AppError.AppError("password incorrect!", 401);
    }

    const token = (0, _jsonwebtoken.sign)({}, "7ddd68e771c61f836eb6de453185c505", {
      subject: user.id,
      expiresIn: "1d"
    });
    ;
    const tokenReturn = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    };
    return tokenReturn;
  }

}) || _class) || _class) || _class) || _class);
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;