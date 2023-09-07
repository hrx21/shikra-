import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Schools } from './schools/entities/schools.entity';
import { Students } from './students/entities/student.entity';
import { StudentAttentance } from './student-attendance/entities/student-attendance.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'shikra',
      synchronize: true,
      logging: true,
      entities: [User, Schools, Students, StudentAttentance],
    }),
  ],
})
export class DatabaseModule {}
