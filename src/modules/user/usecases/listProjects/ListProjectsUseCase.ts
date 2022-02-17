import { inject, injectable } from 'tsyringe';
import { IProjectRepository } from '../../repositories/IProjectRepository';
import { IProjectDto } from "../../dtos/IProjectDTO";

@injectable()
class ListProjectsUseCase {
    constructor(
        @inject("ProjectRepository")
        private projectRepository: IProjectRepository
    ) {

    }

    async execute(category): Promise<IProjectDto[]> {
        const projects = await this.projectRepository.listAllProjects(category);

        return projects;
    }
}

export { ListProjectsUseCase }