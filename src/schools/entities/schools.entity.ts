import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schools {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:true})
  name: string;

  @Column({default:true})
  type: string;
}
