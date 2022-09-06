import { Project } from "../entities/Project";
import { IProjectDto } from "../../user/dtos/IProjectDTO";

interface ICreateProjectDto {
    category: string;
    image: string;
    user_email: string;
    isPrivate: boolean;
}

interface IProjectRepository {
    create({ category, image, user_email, isPrivate }: ICreateProjectDto): Promise<void>;
    listByUserEmail(user_email: string, category: string,page:number,pageSize:number): Promise<Project[]>;
    listUserProjects(user_email: string, category: string,page:number,pageSize:number): Promise<Project[]>;
    listAllProjects(category: string,page: number,pageSize:number): Promise<IProjectDto[]>;
    delete(id: string): Promise<void>;
}


export { ICreateProjectDto, IProjectRepository }