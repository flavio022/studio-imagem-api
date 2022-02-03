import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";

class CreateCategoryController {


    async handler(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const createProjectUseCase = container.resolve(CreateCategoryUseCase);

        await createProjectUseCase.execute({ name });

        return response.status(201).send();
    }
}

export { CreateCategoryController }