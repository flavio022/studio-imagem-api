import { IUserRepository } from "../../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string
    email: string
    company: string
    address: string
    password: string
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async execute({ name, email, company, address, password }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.userRepository.findByEmail(
            email
        );

        if (categoryAlreadyExists) {
            throw new AppError("User already exist!", 401);
        }
        const passwordHash = await hash(password, 8);

        await this.userRepository.create({ name, email, company, address, password: passwordHash });
    }

}

export { CreateUserUseCase }