import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

@injectable()
class ListProjectsController {
    async handle(request: Request, response: Response) {
        const listProjectsUseCase = container.resolve(ListProjectsUseCase);

        const projects = await listProjectsUseCase.execute();

        return response.json(projects);
    }
}

export { ListProjectsController }