import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User])]
})
export class AppModule {}
