import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
const { uuid } = require('uuidv4');

@Entity("users")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    company: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @Column()
    isActiveted: boolean;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };