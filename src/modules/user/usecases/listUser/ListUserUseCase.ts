import { IUserRepository } from '../../repositories/IUserRepository';
import { User } from '../../entities/User';
import { inject, injectable } from 'tsyringe';


@injectable()
class ListUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository) {
    }
    async execute(): Promise<User[]> {

        const users = await this.userRepository.list();

        return users;
    }
}

export { ListUserUseCase }