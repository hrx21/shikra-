import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database.module';
import { StudentsModule } from './students/students.module';
import { SchoolsModule } from './schools/schools.module';
import { StudentAttendanceModule } from './student-attendance/student-attendance.module';
import { AssessmentLogsModule } from './assessment-logs/assessment-logs.module';

@Module({
  imports: [DatabaseModule, UserModule, StudentsModule, SchoolsModule, StudentAttendanceModule, AssessmentLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
