const { uuid } = require('uuidv4');
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;
    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}


export { Category }