
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('identity', {generatedIdentity : 'ALWAYS'})
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
