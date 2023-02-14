import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './UserModel';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @ManyToOne(() => User, (user) => user.userName)
  @JoinColumn({name: 'postOwner'})
  postOwner: User;

  @Column()
  imgSrc: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  description?: string;
}
