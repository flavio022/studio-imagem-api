import { IUserRepository } from "../../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {

    }

    async execute(id: string): Promise<void> {
        console.log(id);
        await this.userRepository.delete(id);
    }
}

export { DeleteUserUseCase }