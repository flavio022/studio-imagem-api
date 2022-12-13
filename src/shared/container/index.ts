import { container } from 'tsyringe';
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { IProjectRepository } from "../../modules/user/repositories/IProjectRepository";

import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository";
import { ProjectRepository } from "../../modules/user/repositories/implementations/ProjectRepository";

import { IStorageProvider } from "../../shared/container/providers/StorageProvider/IStorageProvider";
import { LocalStorageProvider } from "../../shared/container/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../../shared/container/providers/StorageProvider/implementations/S3StorageProvider";

import { ICategoryRepository } from "../../modules/categories/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/categories/repositories/implementations/CategoryRepository";



container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
)

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<IProjectRepository>(
    "ProjectRepository",
    ProjectRepository
)

container.registerSingleton<IStorageProvider>(
    "StorageProvider",
    LocalStorageProvider
)