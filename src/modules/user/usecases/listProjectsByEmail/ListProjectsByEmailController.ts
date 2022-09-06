import { Request, Response } from "express";
import { ListProjectsByEmailUseCase } from "./ListProjectsByEmailUseCase";
import { container } from "tsyringe";

class ListProjectsByEmailController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { email } = request.headers;
        const { category,page,pageSize } = request.query;
        console.log(category);
        const createCategoryUseCase = container.resolve(ListProjectsByEmailUseCase);
        if (category === undefined) {
            console.log("vazio")
        }
        const projects = await createCategoryUseCase.execute({ email, category,page,pageSize });


        return response.json(projects);
    }
}

export { ListProjectsByEmailController }