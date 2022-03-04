import { User } from '../../entities/User';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
    email: string;
    isAdmin: boolean;
}

@injectable()
class SetAdminUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {

    } async execute({
        email, isAdmin
    }: IRequest): Promise<void> {
        await this.userRepository.setAdmin({ email, isAdmin });
    }
}

export { SetAdminUseCase }