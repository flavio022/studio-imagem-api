"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UserRepository_1 = require("../../modules/user/repositories/implementations/UserRepository");
var ProjectRepository_1 = require("../../modules/user/repositories/implementations/ProjectRepository");
var S3StorageProvider_1 = require("../../shared/container/providers/StorageProvider/implementations/S3StorageProvider");
var CategoryRepository_1 = require("../../modules/categories/repositories/implementations/CategoryRepository");
tsyringe_1.container.registerSingleton("CategoryRepository", CategoryRepository_1.CategoryRepository);
tsyringe_1.container.registerSingleton("UserRepository", UserRepository_1.UserRepository);
tsyringe_1.container.registerSingleton("ProjectRepository", ProjectRepository_1.ProjectRepository);
tsyringe_1.container.registerSingleton("StorageProvider", S3StorageProvider_1.S3StorageProvider);
