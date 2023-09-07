import { Module } from '@nestjs/common';
import { AssessmentLogsService } from './assessment-logs.service';
import { AssessmentLogsController } from './assessment-logs.controller';

@Module({
  controllers: [AssessmentLogsController],
  providers: [AssessmentLogsService],
})
export class AssessmentLogsModule {}
