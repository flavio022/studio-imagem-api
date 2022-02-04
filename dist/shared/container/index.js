"use strict";

var _tsyringe = require("tsyringe");

var _UserRepository = require("../../modules/user/repositories/implementations/UserRepository");

var _ProjectRepository = require("../../modules/user/repositories/implementations/ProjectRepository");

var _S3StorageProvider = require("../../shared/container/providers/StorageProvider/implementations/S3StorageProvider");

var _CategoryRepository = require("../../modules/categories/repositories/implementations/CategoryRepository");

_tsyringe.container.registerSingleton("CategoryRepository", _CategoryRepository.CategoryRepository);

_tsyringe.container.registerSingleton("UserRepository", _UserRepository.UserRepository);

_tsyringe.container.registerSingleton("ProjectRepository", _ProjectRepository.ProjectRepository);

_tsyringe.container.registerSingleton("StorageProvider", _S3StorageProvider.S3StorageProvider);

_tsyringe.container.registerSingleton("StorageProvider", _S3StorageProvider.S3StorageProvider);