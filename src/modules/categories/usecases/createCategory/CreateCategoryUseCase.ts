import { ICategoryRepository } from '../../repositories/ICategoryRepository';
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string;
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository,

    ) { }

    async execute({ name }: IRequest): Promise<void> {
        const category = await this.categoryRepository.create({ name })
    }
}

export { CreateCategoryUseCase }