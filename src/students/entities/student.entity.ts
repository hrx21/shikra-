import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Schools } from 'src/schools/entities/schools.entity';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  student_id:string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  date_of_birth: string;

  @OneToOne(() => Schools, (school) => school.id,{
    onDelete:"CASCADE"
  })

  @JoinColumn({name:"school_id"})
  school_id: Schools

  @Column()
  class: string;

  @Column()
  father_name: string;

  @Column()
  mother_name: string;

  @Column()
  caste: string;

  @Column()
  category: string

  @Column()
  current_unit: number

  @Column()
  current_hindi_test_grade: number

  @Column()
  current_maths_test_grade: number
  
  @Column()
  current_biodiversity_test_grade:number

  @Column()
  may_attendance: number

  @Column()
  june_attendance: number

  @Column()
  july_attendance: number

  @Column()
  aug_attendance: number

  @Column()
  sep_attendance: number

  @Column()
  oct_attendance: number

  @Column()
  nov_attendance: number

  @Column()
  dec_attendance: number

  @Column()
  jan_attendance: number

  @Column()
  feb_attendance:number

  @Column()
  mar_attendance:number
  
  @Column()
  apr_attendance:number
}
