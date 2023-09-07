import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Students } from 'src/students/entities/student.entity';

@Entity()
export class StudentAttentance {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Students, (student) => student.id,{
    onDelete:"CASCADE"
  })

  @JoinColumn({name:"student_id"})
  student_id: Students

  @Column()
  worker_taking_attendance: string;

  @Column()
  attendance_date: string;

  @Column()
  present: boolean
}