import { Project } from "../entities/Project";
import { IProjectDto } from "../../user/dtos/IProjectDTO";

interface ICreateProjectDto {
    category: string;
    image: string;
    user_email: string;
}

interface IProjectRepository {
    create({ category, image, user_email }: ICreateProjectDto): Promise<void>;
    listByUserEmail(user_email: string): Promise<Project[]>;
    listAllProjects(): Promise<IProjectDto[]>;
}


export { ICreateProjectDto, IProjectRepository }