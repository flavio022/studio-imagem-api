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

    async listAllProjects(category: string,page: number,pageSize:number): Promise<Project[]> {
        var projects = null;
        var count =0;
        if (category !== undefined) {
            console.log("private udnie")

            const[project,total] = await this.projectRepository.findAndCount({
                where: {
                    category,
                    isPrivate: false
                },
                order:{
                    created_at:'DESC'
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            });
            projects =project;
            count = total;
        }
        else {
            console.log("private flase")
            const[project,total] = await this.projectRepository.findAndCount({
                where: {
                    isPrivate: false
                },
                order:{
                    created_at:'DESC'
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            });
            projects =project;
            count = total;
        }
        return {
            projects,
            count,
            page,
            pageSize
        }
    }

    async listByUserEmail(user_email: string, category: string,page:number,pageSize:number): Promise<Project[]> {
        var projects = null;
        var count =0;

        if (category === undefined) {
            const[project,total] = await this.projectRepository.findAndCount({
                where:
                {
                    user_email: user_email
                },
                order:{
                    created_at:'DESC'
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            });
            projects =project;
            count = total;
                
        } else {
            const[project,total] = await this.projectRepository.findAndCount({
                where: {
                    user_email: user_email,
                    category: category
                },
                order:{
                    created_at:'DESC'
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            });
            projects =project;
            count = total;
        }
        return {
            projects,
            count,
            page,
            pageSize
        }
    }
    async listUserProjects(user_email: string, category: string,page:number,pageSize:number): Promise<Project[]> {
        var projects = null;
        var count =0;
        if (category === undefined) {
            const[project,total] = await this.projectRepository.findAndCount({
                where:
                {
                    user_email: user_email
                },
                order:{
                    created_at:'DESC'
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            });
            projects =project;
            count = total;
        } else {
            const[project,total]  = await this.projectRepository.findAndCount({
                where: {
                    user_email: user_email,
                    category: category
                },
                order:{
                    created_at:'DESC'
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            });
            projects =project;
            count = total;
        }
        return {
            projects,
            count,
            page,
            pageSize
        }
    }

    async create({ category, image, user_email, isPrivate }: ICreateProjectDto): Promise<void> {

        if (isPrivate == 'true' || isPrivate == true) {
            isPrivate = true;
        } else {
            isPrivate = false;
        }


        const specification = this.projectRepository.create(
            {
                category,
                image,
                user_email,
                isPrivate: isPrivate
            }
        )
        console.log(specification)
        await this.projectRepository.save(specification);
    }

}

export { ProjectRepository };