import { Request, Response } from "express";
import { SetAdminUseCase } from "./SetAdminUseCase";
import { container } from "tsyringe";

class SetAdminController {
    async handle(request: Request, response: Response) {
        const { email, isAdmin } = request.body;
        const setAdminUseCase = container.resolve(SetAdminUseCase);
        console.log(email);
        await setAdminUseCase.execute({ email, isAdmin });

        return response.status(201).send()
    }
}

export { SetAdminController }