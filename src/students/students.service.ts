import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Students } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private readonly studentRepository: Repository<Students>,
  ) {}

 async create(createStudentDto: any) {
  console.log("vsdevffvnwiafcawfcnwjafnfcafcnwafafcnajnfcjacfjn",createStudentDto)
  const newStudent = this.studentRepository.create(createStudentDto)
  return await this.studentRepository.save(newStudent)
    // return 'This action adds a new student';
  }

 async findAll() {
  return await this.studentRepository.find()
}


findAllStudentsBySchool(school_id:any) {
  return this.studentRepository.find({
    where:{
      school_id: school_id
    },
    relations: {
      school_id: true,
  },
  })
}

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
