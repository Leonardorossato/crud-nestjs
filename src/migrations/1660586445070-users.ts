import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1660586445070 implements MigrationInterface {
    name = 'users1660586445070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name : 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name : 'name',
                    type: 'varchar(100)',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar(100)',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar(100)',
                    isNullable: false
                }
            ]
        })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
