import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
    
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: '123456789',
            database: 'crud',
            entities: ['src/**/**.entity{.ts,.js}'],
            migrations: ['src/migration/*.ts'],
            synchronize: false,
            logging: 'all',
            migrationsRun: true,
        };
        
    },
  
};