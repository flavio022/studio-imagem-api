"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthetnticated = ensureAuthetnticated;

var _jsonwebtoken = require("jsonwebtoken");

var _UserRepository = require("../modules/user/repositories/implementations/UserRepository");

var _AppError = require("../errors/AppError");

async function ensureAuthetnticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.AppError("Token missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, "7ddd68e771c61f836eb6de453185c505");
    const userRepository = new _UserRepository.UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new _AppError.AppError("User does not exists!", 401);
    }

    request.user = {
      id: user.id,
      email: user.email
    };
    next();
  } catch {
    throw new _AppError.AppError("Inválid token", 401);
  }
}