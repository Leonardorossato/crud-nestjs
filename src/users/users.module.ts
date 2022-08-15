import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { myDataSource } from 'src/config/data.source';

@Module({
  controllers: [UsersController],
  providers: [UsersService, User],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
