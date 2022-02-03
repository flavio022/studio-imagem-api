import { Project } from "../entities/Project";
import { IProjectDto } from "../../user/dtos/IProjectDTO";

interface ICreateProjectDto {
    category: string;
    company: string;
    image: string;
    user_email: string;
}

interface IProjectRepository {
    create({ category, company, image, user_email }: ICreateProjectDto): Promise<void>;
    listByUserEmail(user_email: string): Promise<Project[]>;
    listAllProjects(): Promise<IProjectDto[]>;
    delete(id: string): Promise<void>;
}


export { ICreateProjectDto, IProjectRepository }