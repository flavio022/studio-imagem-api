import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserContoller {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const delteUserUseCase = container.resolve(DeleteUserUseCase);
        delteUserUseCase.execute(id);
        return response.status(201).send();
    }
}

export { DeleteUserContoller }