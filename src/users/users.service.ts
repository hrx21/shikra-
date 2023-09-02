import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        // @InjectRepository(User)
        // private readonly userRepository: Repository<User>,
      ) {}      

      // async create(createUserDto: User): Promise<User> {
      //   const newUser = this.userRepository.create(createUserDto);
      //   return await this.userRepository.save(newUser);
      // }
      
}

