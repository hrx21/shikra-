import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity'
import { UsersController } from './users.controller';

@Module({

    imports: [
        TypeOrmModule.forRoot({
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "root",
            "database": "shikra",
            "entities": ["dist/**/*.entity{.ts,.js}"],
            "synchronize": true
        }),
        TypeOrmModule.forFeature([User])
    ],

    controllers: [UsersController],
})
export class UsersModule {}
