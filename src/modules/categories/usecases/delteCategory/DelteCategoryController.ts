import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        console.log(id);
        const listCategoryUseCase = container.resolve(DeleteCategoryUseCase);
        listCategoryUseCase.execute(id);
        return response.status(201).send();
    }
}

export { DeleteProjectController }