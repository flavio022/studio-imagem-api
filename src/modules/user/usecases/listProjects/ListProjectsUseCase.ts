import { Project } from '@modules/user/entities/Project';
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

    async execute(): Promise<IProjectDto[]> {
        const projects = await this.projectRepository.listAllProjects();

        return projects;
    }
}

export { ListProjectsUseCase }