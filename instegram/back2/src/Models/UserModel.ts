import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'user'})
export class User {
  @PrimaryColumn()
  userName: string;

  @Column({ nullable: true })
  userImg?: string;
}
