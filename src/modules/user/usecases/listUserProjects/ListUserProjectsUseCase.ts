import { Project } from '@modules/user/entities/Project';
import { inject, injectable } from 'tsyringe';
import { IProjectRepository } from '../../repositories/IProjectRepository';

@injectable()
class ListUserProjectsUseCase {
    constructor(
        @inject("ProjectRepository")
        private projectRepository: IProjectRepository
    ) {

    }

    async execute({ email }): Promise<Project[]> {
        const projects = await this.projectRepository.listByUserEmail(email);

        return projects;
    }
}

export { ListUserProjectsUseCase }