import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

@injectable()
class ListCategoryController {
    async handle(request: Request, response: Response) {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);

        const projects = await listCategoryUseCase.execute();

        return response.json(projects);
    }
}

export { ListCategoryController }