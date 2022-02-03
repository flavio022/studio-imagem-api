import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";
import { ListProjectsUseCase } from "../listProjects/ListProjectsUseCase";

class DeleteProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        console.log(id);
        const listProjectsUseCase = container.resolve(DeleteProjectUseCase);
        listProjectsUseCase.execute(id);
        return response.status(201).send();
    }
}

export { DeleteProjectController }