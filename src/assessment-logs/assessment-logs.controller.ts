import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssessmentLogsService } from './assessment-logs.service';
import { CreateAssessmentLogDto } from './dto/create-assessment-log.dto';
import { UpdateAssessmentLogDto } from './dto/update-assessment-log.dto';

@Controller('assessment-logs')
export class AssessmentLogsController {
  constructor(private readonly assessmentLogsService: AssessmentLogsService) {}

  @Post()
  create(@Body() createAssessmentLogDto: CreateAssessmentLogDto) {
    return this.assessmentLogsService.create(createAssessmentLogDto);
  }

  @Get()
  findAll() {
    return this.assessmentLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assessmentLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssessmentLogDto: UpdateAssessmentLogDto) {
    return this.assessmentLogsService.update(+id, updateAssessmentLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assessmentLogsService.remove(+id);
  }
}
