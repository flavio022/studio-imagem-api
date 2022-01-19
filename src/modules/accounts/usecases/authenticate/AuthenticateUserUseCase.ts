import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string
}


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        console.log(email);
        if (!user) {
            throw new AppError("Email or password incorrect", 401);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("password incorrect!", 401);
        }

        const token = sign({}, "7ddd68e771c61f836eb6de453185c505", {
            subject: user.id,
            expiresIn: "1d"
        });;

        const tokenReturn: IResponse = {

            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
        return tokenReturn;
    }

}


export { AuthenticateUserUseCase }