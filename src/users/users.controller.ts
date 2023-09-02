import { UsersService } from './users.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    // @Post()
    // async createUser(@Body() createUserDto: CreateUserDto) {
    //   return this.usersService.create(createUserDto);
    // }
  
}
