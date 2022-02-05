import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProjects1637161663194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "projects",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,

                    },
                    {
                        name: "category",
                        type: "varchar"
                    },
                    {
                        name: "image",
                        type: "varchar"
                    },

                    {
                        name: "user_email",
                        type: "varchar"
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("projects")
    }

}
