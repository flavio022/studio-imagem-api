import { Project } from '../../entities/Project';
import { inject, injectable } from 'tsyringe';
import { IProjectRepository } from '../../repositories/IProjectRepository';

@injectable()
class ListUserProjectsUseCase {
    constructor(
        @inject("ProjectRepository")
        private projectRepository: IProjectRepository
    ) {

    }

    async execute({ email, category }): Promise<Project[]> {
        const projects = await this.projectRepository.listUserProjects(email, category);

        return projects;
    }
}

export { ListUserProjectsUseCase }