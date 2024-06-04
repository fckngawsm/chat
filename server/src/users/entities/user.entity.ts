import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  password: string;
}
