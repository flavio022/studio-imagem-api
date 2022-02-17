import { Project } from "../../entities/Project";
import { inject, injectable } from 'tsyringe';
import { IProjectRepository } from '../../repositories/IProjectRepository';
import { AppError } from "../../../../errors/AppError";
@injectable()
class ListProjectsByEmailUseCase {
    constructor(
        @inject("ProjectRepository")
        private projectRepository: IProjectRepository
    ) {

    }

    async execute({ email, category }): Promise<Project[]> {
        const projects = await this.projectRepository.listByUserEmail(email, category);
        if (!projects) {
            throw new AppError("User does not found!", 401);
        }
        return projects;
    }
}

export { ListProjectsByEmailUseCase }