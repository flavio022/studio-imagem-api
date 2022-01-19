import { v4 as uuidV4 } from "uuid";
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
            this.id = uuidV4();
        }
    }
}


export { Project }