import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
    email: string;
    isActiveted: boolean;
}

@injectable()
class ActiveUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {

    }

    async execute({
        email, isActiveted
    }: IRequest): Promise<void> {
        await this.userRepository.enableUser({ email, isActiveted });
    }
}

export { ActiveUserUseCase }