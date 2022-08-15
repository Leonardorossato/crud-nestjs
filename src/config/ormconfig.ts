import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
    
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456789',
            database: 'crud',
            entities: [__dirname +'../src/**/**.entity{.ts,.js}'],
            migrations: [__dirname +'../src/migrations/*.{ts,js}'],
            synchronize: false,
            logging: 'all',
            migrationsRun: true,
            migrationsTableName : 'users'
        };
        
    },
  
};