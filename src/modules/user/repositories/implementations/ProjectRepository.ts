import { getRepository, Repository } from "typeorm";
import { Project } from "../../entities/Project";
import { ICreateProjectDto, IProjectRepository } from "../IProjectRepository";

class ProjectRepository implements IProjectRepository {

    private projectRepository: Repository<Project>;

    constructor() {
        this.projectRepository = getRepository(Project);
    }
    async listAllProjects(): Promise<Project[]> {
        const projects = await this.projectRepository.find();

        return projects;
    }
    async listByUserEmail(user_email: string): Promise<Project[]> {
        console.log(user_email);
        const project = await this.projectRepository.find({
            where:
            {
                user_email: user_email
            }
        });
        return project;
    }


    async create({ category, image, user_email }: ICreateProjectDto): Promise<void> {
        const specification = this.projectRepository.create(
            {
                category,
                image,
                user_email
            }
        )
        await this.projectRepository.save(specification);
    }

}

export { ProjectRepository };