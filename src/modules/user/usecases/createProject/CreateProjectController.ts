import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";
import { container } from "tsyringe";

class CreateProjectController {


    async handler(request: Request, response: Response): Promise<Response> {
        const { category, user_email } = request.body;
        const image = request.file.filename;
        const createProjectUseCase = container.resolve(CreateProjectUseCase);

        await createProjectUseCase.execute({ category, image, user_email });

        return response.status(201).send();
    }
}

export { CreateProjectController }