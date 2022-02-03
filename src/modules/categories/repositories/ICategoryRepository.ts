import { Category } from "../entities/Category";
import { ICategoryDto } from "../../categories/dtos/ICategoryDTO";

interface ICreateCategoryDto {
    name: string;
}

interface ICategoryRepository {
    create({ name }: ICategoryDto): Promise<void>;
    ListAll(): Promise<ICategoryDto[]>;
    delete(id: string): Promise<void>;
}


export { ICreateCategoryDto, ICategoryRepository }