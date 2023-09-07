import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'

@Injectable()

export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
  
  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: any): Promise<User | undefined> {
    return await this.userRepository.findOne(id);
  }
  
  async update(id: any, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    const user = await this.userRepository.findOne(id);
  
    if (!user) {
      return undefined; 
    }
  
    Object.assign(user, updateUserDto);
  
    return await this.userRepository.save(user);
  }
  
  async remove(id: any): Promise<void> {
    const user = await this.userRepository.findOne(id);
  
    if (user) {
      await this.userRepository.remove(user);
    }
  }
  
}
