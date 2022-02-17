import { AppError } from "../../../../errors/AppError";
import { getRepository, Repository } from "typeorm";
import { Project } from "../../entities/Project";
import { ICreateProjectDto, IProjectRepository } from "../IProjectRepository";

class ProjectRepository implements IProjectRepository {

    private projectRepository: Repository<Project>;

    constructor() {
        this.projectRepository = getRepository(Project);
    }

    async delete(id: string): Promise<void> {
        const project = await this.projectRepository.findOne(id);
        if (!project) {
            throw new AppError("project does no exist!", 401);
        }
        await this.projectRepository.delete(id);
    }

    async listAllProjects(category: string): Promise<Project[]> {
        var projects = null;
        if (category != undefined) {
            projects = await this.projectRepository.find({
                where: category
            });
        } else {
            projects = await this.projectRepository.find();
        }
        return projects;
    }

    async listByUserEmail(user_email: string, category: string): Promise<Project[]> {
        var project = null;
        if (category === undefined) {
            project = await this.projectRepository.find({
                where:
                {
                    user_email: user_email
                }
            });
        } else {
            project = await this.projectRepository.find({
                where: {
                    user_email: user_email,
                    category: category
                }
            })
        }
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