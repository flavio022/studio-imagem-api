const { uuid } = require('uuidv4');
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Expose } from 'class-transformer';

@Entity("projects")
class Project {

    @PrimaryColumn()
    id?: string;

    @Column()
    category: string;

    @Column()
    image: string;

    @Column()
    user_email: string;

    @Column()
    isPrivate?: boolean;

    @CreateDateColumn()
    created_at: Date;

    @Expose({ name: "image_url" })
    getImageUrl(): string {
        switch (process.env.disk) {
            case "local":
                return `${process.env.APP_API_URL}/files/${this.image}`;
            case "s3":
                return `${process.env.AWS_BUCKET_URL}/${this.image}`;
            default:
                return null;
        }
    }

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
        this.isPrivate = this.isPrivate;
    }
}


export { Project }