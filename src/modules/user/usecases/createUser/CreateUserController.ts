import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, password } = request.body;
        console.log(request.body);
        const createCategoryUseCase = container.resolve(CreateUserUseCase);

        await createCategoryUseCase.execute({ name, email, password });


        return response.status(201).send();
    }
}

export { CreateUserController }