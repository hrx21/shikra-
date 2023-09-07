import { Injectable } from '@nestjs/common';
import { CreateAssessmentLogDto } from './dto/create-assessment-log.dto';
import { UpdateAssessmentLogDto } from './dto/update-assessment-log.dto';

@Injectable()
export class AssessmentLogsService {
  create(createAssessmentLogDto: CreateAssessmentLogDto) {
    return 'This action adds a new assessmentLog';
  }

  findAll() {
    return `This action returns all assessmentLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assessmentLog`;
  }

  update(id: number, updateAssessmentLogDto: UpdateAssessmentLogDto) {
    return `This action updates a #${id} assessmentLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessmentLog`;
  }
}
