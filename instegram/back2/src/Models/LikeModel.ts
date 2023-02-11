import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Post } from './PostModel';
import { User } from './UserModel';

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
