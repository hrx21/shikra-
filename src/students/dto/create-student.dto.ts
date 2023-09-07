import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsEmail,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
export class CreateStudentDto {
    // @PrimaryGeneratedColumn()
    // id: number;
  
    @IsString()
    @IsNotEmpty()    
    student_id:string;
    
    @IsNumber()
    @IsNotEmpty()    
     school_id:number;
  
  
    @IsString()
    @IsNotEmpty()    
         name: string;
  
  
    @IsString()
    @IsNotEmpty()    
         gender: string;
  
  
    @IsString()
    @IsNotEmpty()    
         date_of_birth: string;

      
    // @IsString()
    // @IsNotEmpty()    
    //  school_name: string

    // @ManyToOne(() => Schools, (school) => school.id)
    // school_name: Schools;
  
  
    @IsString()
    @IsNotEmpty()    
         class: string;
  
  
    @IsString()
    @IsNotEmpty()    
         father_name: string;
  
  
    @IsString()
    @IsNotEmpty()    
         mother_name: string;
  
  
    @IsString()
    @IsNotEmpty()    
         caste: string;
  
  
    @IsString()
    @IsNotEmpty()    
         category: string
  
  
    @IsString()
    @IsNotEmpty()    
         current_unit: number
  
      
    // @IsString()
    // @IsNotEmpty()    
    //  school_type:number
    // @ManyToOne(() => Schools, (school) => school.type)
    // // @JoinColumn({ name: 'school_type' }) 
    // // school_type: Schools;
    // school_type: Schools;
  
  
    @IsString()
    @IsNotEmpty()    
        current_maths_test_grade: number
    
    @IsString()
    @IsNotEmpty()    
        current_biodiversity_test_grade:number
  
    @IsString()
    @IsNotEmpty()    
        may_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        june_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        july_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        aug_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        sep_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        oct_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        nov_attendance: number
  
    @IsString()
    @IsNotEmpty()    
        dec_attendance: number
  
    @IsString()
    @IsNotEmpty()    jan_attendance: number
  
    @IsString()
    @IsNotEmpty()    feb_attendance:number
  
    @IsString()
    @IsNotEmpty()    mar_attendance:number
    
    @IsString()
    @IsNotEmpty()    apr_attendance:number
}
