import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'crud',
    entities: ['../src/**/**.entity{.ts,.js}'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: 'all',
    migrationsRun: true,
    migrationsTableName: 'users'
});
