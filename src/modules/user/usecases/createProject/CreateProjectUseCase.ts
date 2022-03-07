import { IProjectRepository } from '../../repositories/IProjectRepository';
import { IUserRepository } from '../../repositories/IUserRepository';

import { inject, injectable } from "tsyringe";
import { IStorageProvider } from '../../../../shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    category: string;
    image: string;
    user_email: string;
    isPrivate: boolean;
    isAdmin: boolean;
}
@injectable()
class CreateProjectUseCase {
    constructor(
        @inject("ProjectRepository")
        private projectRepository: IProjectRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ) { }

    async execute({ category, image, user_email, isPrivate, isAdmin }: IRequest): Promise<void> {
        const user = await this.userRepository.findByEmail(user_email);
        if (!isAdmin) {
            throw new AppError("User does not a admin!", 403);
        }
        if (!user) {
            throw new AppError("User does not exist!", 401);
        }
        await this.storageProvider.saveFile(image, "projects");
        image = `${process.env.AWS_BUCKET_URL}/${image}`;
        await this.projectRepository.create({ category, image, user_email, isPrivate })
    }
}

export { CreateProjectUseCase }