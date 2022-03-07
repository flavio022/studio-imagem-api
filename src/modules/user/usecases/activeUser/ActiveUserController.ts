import { Request, Response } from "express";
import { ActiveUserUseCase } from "./ActiveUserUseCase";
import { container } from "tsyringe";

class ActiveUserController {
    async handle(request: Request, response: Response) {
        const { email, isActiveted } = request.body;
        const activeUserUseCase = container.resolve(ActiveUserUseCase);

        await activeUserUseCase.execute({ email, isActiveted });

        return response.status(201).send()
    }
}

export { ActiveUserController }