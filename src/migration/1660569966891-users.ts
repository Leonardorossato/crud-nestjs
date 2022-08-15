import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class users1660569966891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: "name",
                    type: 'varchar(200)',
                    isNullable: false
                },
                {
                    name: "email",
                    type: 'varchar(200)',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password",
                    type: 'varchar(200)',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropTable('users')
    }

}
