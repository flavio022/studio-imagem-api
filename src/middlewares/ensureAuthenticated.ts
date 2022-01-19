import { NextFunction, Request, response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";
import { AppError } from "../errors/AppError";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthetnticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401);
    }

    const [, token] = authHeader.split(" ");
    console.log(token);
    try {
        const { sub: user_id } = verify(token, "7ddd68e771c61f836eb6de453185c505") as IPayLoad;
        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }
        request.user = {
            id: user.id,
            email: user.email
        };

        next();

    } catch {
        throw new AppError("Inválid token", 401);
    }
}