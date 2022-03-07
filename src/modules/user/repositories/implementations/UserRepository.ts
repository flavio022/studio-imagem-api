import { AppError } from "../../../../errors/AppError";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository, ICreateUserDTO, IActiveUserDTO, ISetAdminDTO } from "../IUserRepository";

class UserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async enableUser({ email, isActiveted }: IActiveUserDTO): Promise<void> {
        const user = await this.repository.findOne({
            email
        })
        if (!user) {
            throw new AppError("User not found!", 401);
        }
        user.isActiveted = isActiveted;
        await this.repository.save(user);
    }

    async setAdmin({ email, isAdmin }: ISetAdminDTO): Promise<void> {
        const user = await this.repository.findOne({
            email
        })
        if (!user) {
            throw new AppError("User not found!", 401);
        }
        user.isAdmin = isAdmin;
        await this.repository.save(user);
    }

    async delete(id: string): Promise<void> {
        const user = this.findById(id);
        if (!user) {
            throw new AppError("User not found!", 401);
        }
        await this.repository.delete(id);

    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);

        return user;
    }


    async create({ name, company, address, email, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            company,
            address,
            email,
            password
        });

        await this.repository.save(user);
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({
            email
        });
        return user;
    }
}

export { UserRepository };