import { User } from '../entities/User'

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    list(): Promise<User[]>;
    create({ name, email, password }: ICreateUserDTO): Promise<void>;

}


export { IUserRepository, ICreateUserDTO }