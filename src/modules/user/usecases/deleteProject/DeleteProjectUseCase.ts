import { IProjectRepository } from "../../repositories/IProjectRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteProjectUseCase {

    constructor(
        @inject("ProjectRepository")
        private projectRepository: IProjectRepository
    ) {

    }

    async execute(id: string): Promise<void> {
        console.log(id);
        await this.projectRepository.delete(id);
    }
}

export { DeleteProjectUseCase }