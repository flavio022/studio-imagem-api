import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";
import { container } from "tsyringe";

class CreateProjectController {


    async handler(request: Request, response: Response): Promise<Response> {
        let { category, user_email, isPrivate } = request.body;

        if (isPrivate === 'true') {
            isPrivate = true;
        } else {
            isPrivate = false;
        }

        const image = request.file.filename;
        const createProjectUseCase = container.resolve(CreateProjectUseCase);

        await createProjectUseCase.execute({ category, image, user_email, isPrivate });

        return response.status(201).send();
    }
}

export { CreateProjectController }