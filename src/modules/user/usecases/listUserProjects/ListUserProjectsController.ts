import { Request, Response } from "express";
import { ListUserProjectsUseCase } from "./ListUserProjectsUseCase";
import { container } from "tsyringe";

class ListUserProjectsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { category,page, pageSize } = request.query;
        const email = request.user.email;
        const createCategoryUseCase = container.resolve(ListUserProjectsUseCase);

        const projects = await createCategoryUseCase.execute({ email, category,page,pageSize });


        return response.json(projects);
    }
}

export { ListUserProjectsController }