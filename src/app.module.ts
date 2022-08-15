import { typeOrmAsyncConfig } from './config/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [UsersModule, TypeOrmModule.forRootAsync(typeOrmAsyncConfig)]
})
export class AppModule {}
