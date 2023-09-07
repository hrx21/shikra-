import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentAttendanceService } from './student-attendance.service';
import { CreateStudentAttendanceDto } from './dto/create-student-attendance.dto';
import { UpdateStudentAttendanceDto } from './dto/update-student-attendance.dto';

@Controller('student-attendance')
export class StudentAttendanceController {
  constructor(private readonly studentAttendanceService: StudentAttendanceService) {}

  @Post()
  create(@Body() createStudentAttendanceDto: CreateStudentAttendanceDto) {
    return this.studentAttendanceService.create(createStudentAttendanceDto);
  }
  @Get('/students/:id')
    async findAllStudents(@Param() student_id){
      return await this.studentAttendanceService.findAllStudents(student_id)
    }

  @Get()
  findAll() {
    return this.studentAttendanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentAttendanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentAttendanceDto: UpdateStudentAttendanceDto) {
    return this.studentAttendanceService.update(+id, updateStudentAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentAttendanceService.remove(+id);
  }
}
