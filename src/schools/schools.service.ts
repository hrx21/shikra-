import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schools } from './entities/schools.entity';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(Schools)
    private readonly schoolRepository: Repository<Schools>,
  ) {}

    async create(createSchoolDto: any) {
      console.log("createSchoolDto",createSchoolDto)
      const newSchool = this.schoolRepository.create(createSchoolDto)
      return await this.schoolRepository.save(newSchool)
    // return 'This action adds a new school';
  }

  async findAll() {
    return await this.schoolRepository.find()
    // return `This action returns all schools`;
  }
  async findOne(id: any): Promise<Schools | undefined> {
    return await this.schoolRepository.findOne(id);
  }

  async update(id: any, schoolUserDto: UpdateSchoolDto): Promise<Schools | undefined> {
    const school = await this.schoolRepository.findOne(id);
  
    if (!school) {
      return undefined; 
    }
  
    Object.assign(school, UpdateSchoolDto);
  
    return await this.schoolRepository.save(school);
  }

  async remove(id: any): Promise<void> {
    const school = await this.schoolRepository.findOne(id);
  
    if (school) {
      await this.schoolRepository.remove(school);
    }
  }

}
 