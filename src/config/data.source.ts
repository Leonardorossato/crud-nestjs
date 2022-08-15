import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456789',
    database: 'crud',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/migration/*.ts'],
    synchronize: false,
    logging: 'all',
    migrationsRun: true,
});
myDataSource.initialize();