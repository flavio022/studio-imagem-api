import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCategoryUseCase {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {

    }

    async execute(id: string): Promise<void> {
        console.log(id);
        await this.categoryRepository.delete(id);
    }
}

export { DeleteCategoryUseCase }