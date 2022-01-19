import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);

        return user;
    }


    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const category = this.repository.create({
            name,
            email,
            password
        });

        await this.repository.save(category);
    }

    async list(): Promise<User[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByEmail(email: string): Promise<User> {
        const category = await this.repository.findOne({
            email
        });
        return category;
    }
}

export { UserRepository };