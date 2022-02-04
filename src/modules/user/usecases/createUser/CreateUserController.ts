import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, company, address, password } = request.body;
        const createCategoryUseCase = container.resolve(CreateUserUseCase);

        await createCategoryUseCase.execute({ name, email, company, address, password });


        return response.status(201).send();
    }
}

export { CreateUserController }