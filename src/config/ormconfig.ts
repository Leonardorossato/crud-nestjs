import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
    
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'crud',
            entities: ['../src/**/**.entities{.ts,.js}'],
            migrations: ['../src/migrations/*.{ts,js}'],
            synchronize: false,
            logging: false,
            migrationsRun: true,
            migrationsTableName : 'users'
        };
        
    },
  
};