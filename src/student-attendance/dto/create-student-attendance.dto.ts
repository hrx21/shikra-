import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsEmail,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateStudentAttendanceDto {

    @IsString()
    @IsNotEmpty()    
    school_id:string 
  
    @IsString()
    @IsNotEmpty()    
    worker_taking_attendance: string;
  
    @IsString()
    @IsNotEmpty()        
    attendance_date: string;
  
    @IsString()
    @IsNotEmpty()        
    present: boolean
}
