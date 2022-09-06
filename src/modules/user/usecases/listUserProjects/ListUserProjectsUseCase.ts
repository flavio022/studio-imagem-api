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

    async execute({ email, category,page,pageSize }): Promise<Project[]> {
        const projects = await this.projectRepository.listUserProjects(email, category,page,pageSize);

        return projects;
    }
}

export { ListUserProjectsUseCase }