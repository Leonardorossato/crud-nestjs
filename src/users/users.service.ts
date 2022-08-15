import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService implements OnModuleInit {
   
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private dataSource:DataSource) {}
    queryRunner = this.dataSource.createQueryRunner()

    async onModuleInit() {
        try {
        await this.queryRunner.connect();
        } catch (error) {
        await this.queryRunner.connect();
        }
    }

    async create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    findAll(){
        return this.userRepository.find()
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
