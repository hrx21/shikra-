import { Injectable } from '@nestjs/common';
import { CreateStudentAttendanceDto } from './dto/create-student-attendance.dto';
import { UpdateStudentAttendanceDto } from './dto/update-student-attendance.dto';
import { StudentAttentance } from './entities/student-attendance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentAttendanceService {
  constructor(
    @InjectRepository(StudentAttentance)
    private readonly studentAttendance: Repository<StudentAttentance>,
  ) {}
  async create(createStudentAttendanceDto: any) {
    const newAttendance = this.studentAttendance.create(createStudentAttendanceDto)
    return await this.studentAttendance.save(newAttendance)
    // return 'This action adds a new studentAttendance';
  }

 async findAll() {
  return await this.studentAttendance.find()
}

findAllStudents(student_id:any) {
  return this.studentAttendance.find({
    where:{
      student_id: student_id
    },
    relations: {
      student_id: true,
  },
  })
}
  // findAll() {
  //   return `This action returns all studentAttendance`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} studentAttendance`;
  }

  update(id: number, updateStudentAttendanceDto: UpdateStudentAttendanceDto) {
    return `This action updates a #${id} studentAttendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentAttendance`;
  }
}
