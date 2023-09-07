import { Module } from '@nestjs/common';
import { StudentAttendanceService } from './student-attendance.service';
import { StudentAttendanceController } from './student-attendance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentAttentance } from './entities/student-attendance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentAttentance])],
  controllers: [StudentAttendanceController],
  providers: [StudentAttendanceService],
})
export class StudentAttendanceModule {}
