import { Project } from "../entities/Project";
import { IProjectDto } from "../../user/dtos/IProjectDTO";

interface ICreateProjectDto {
    category: string;
    image: string;
    user_email: string;
}

interface IProjectRepository {
    create({ category, image, user_email }: ICreateProjectDto): Promise<void>;
    listByUserEmail(user_email: string, category: string): Promise<Project[]>;
    listAllProjects(category: string): Promise<IProjectDto[]>;
    delete(id: string): Promise<void>;
}


export { ICreateProjectDto, IProjectRepository }