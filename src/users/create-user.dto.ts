import { IsString, IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  name: string;

  @IsString()
  role: string;
}
