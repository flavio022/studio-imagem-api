import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserUseCase } from './ListUserUseCase';


class ListUserController {

    async handler(request: Request, response: Response): Promise<Response> {
        const listUserUseCase = container.resolve(ListUserUseCase);

        const usersList = await listUserUseCase.execute();

        return response.json(usersList);
    }
}

export { ListUserController }