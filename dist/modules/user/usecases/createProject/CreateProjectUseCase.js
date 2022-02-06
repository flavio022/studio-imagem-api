"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProjectUseCase = void 0;

var _IProjectRepository = require("../../repositories/IProjectRepository");

var _IUserRepository = require("../../repositories/IUserRepository");

var _tsyringe = require("tsyringe");

var _IStorageProvider = require("../../../../shared/container/providers/StorageProvider/IStorageProvider");

var _AppError = require("../../../../errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

let CreateProjectUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProjectRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("StorageProvider")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IProjectRepository.IProjectRepository === "undefined" ? Object : _IProjectRepository.IProjectRepository, typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository, typeof _IStorageProvider.IStorageProvider === "undefined" ? Object : _IStorageProvider.IStorageProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateProjectUseCase {
  constructor(projectRepository, userRepository, storageProvider) {
    this.projectRepository = projectRepository;
    this.userRepository = userRepository;
    this.storageProvider = storageProvider;
  }

  async execute({
    category,
    image,
    user_email
  }) {
    const user = await this.userRepository.findByEmail(user_email);

    if (!user) {
      throw new _AppError.AppError("User does not exist!", 401);
    }

    await this.storageProvider.saveFile(image, "projects");
    image = `${process.env.AWS_BUCKET_URL}/${image}`;
    await this.projectRepository.create({
      category,
      image,
      user_email
    });
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.CreateProjectUseCase = CreateProjectUseCase;