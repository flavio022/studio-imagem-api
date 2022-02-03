import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';
import { ICategoryDto } from "../../dtos/ICategoryDTO";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {

    }

    async execute(): Promise<ICategoryDto[]> {
        const categories = await this.categoryRepository.ListAll();
        
        return categories;
    }
}

export { ListCategoryUseCase }