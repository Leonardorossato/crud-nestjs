import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456789',
            database: 'crud',
            entities: ['dist/src/users/entities/*.js'],
            migrations: ['dist/src/migration/*.js'],
            synchronize: false,
        });
        return dataSource.initialize();
    },
  },
];