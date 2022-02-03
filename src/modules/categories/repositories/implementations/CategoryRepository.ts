import { AppError } from "../../../../errors/AppError";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICreateCategoryDto, ICategoryRepository } from "../ICategoryRepository";
import { ICategoryDto } from "@modules/categories/dtos/ICategoryDTO";

class CategoryRepository implements ICategoryRepository {

    private categoryRepository: Repository<Category>;

    constructor() {
        this.categoryRepository = getRepository(Category);
    }

    async ListAll(): Promise<ICategoryDto[]> {
        const categories = await this.categoryRepository.find();

        return categories;
    }

    async delete(id: string): Promise<void> {
        const project = await this.categoryRepository.findOne(id);
        if (!project) {
            throw new AppError("project does no exist!", 401);
        }
        await this.categoryRepository.delete(id);
    }


    async create({ name }: ICreateCategoryDto): Promise<void> {
        const category = this.categoryRepository.create(
            {
                name
            }
        )
        await this.categoryRepository.save(category);
    }

}

export { CategoryRepository };