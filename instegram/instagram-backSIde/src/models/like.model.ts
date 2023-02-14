import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.model';
import { User } from './user.model';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  likeId: number;

  @JoinColumn({ name: 'postId' })
  @ManyToOne(() => Post, (post) => post.postId)
  post: Post;

  @JoinColumn({ name: 'username' })
  @ManyToOne(() => User, (user) => user.userName)
  user: User;
}
