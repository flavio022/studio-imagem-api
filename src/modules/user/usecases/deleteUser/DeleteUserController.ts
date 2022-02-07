import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserContoller {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const listProjectsUseCase = container.resolve(DeleteUserUseCase);
        listProjectsUseCase.execute(id);
        return response.status(201).send();
    }
}

export { DeleteUserContoller }