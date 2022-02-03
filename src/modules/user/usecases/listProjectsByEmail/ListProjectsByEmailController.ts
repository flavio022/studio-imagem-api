import { Request, Response } from "express";
import { ListProjectsByEmailUseCase } from "./ListProjectsByEmailUseCase";
import { container } from "tsyringe";

class ListProjectsByEmailController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { email } = request.headers;
        const createCategoryUseCase = container.resolve(ListProjectsByEmailUseCase);

        const projects = await createCategoryUseCase.execute({ email });


        return response.json(projects);
    }
}

export { ListProjectsByEmailController }