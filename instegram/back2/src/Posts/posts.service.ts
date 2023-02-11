import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../Models/PostModel';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Models/UserModel';
import { UsersService } from '../Users/users.service';
import { PostsController } from './posts.controllers';
import { UsersController } from '../Users/users.controllers';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async addPost(
    postOwner: User,
    imgSrc: string,
    location?: string,
    description?: string,
  ) {
    try {
      return (
        await this.postRepository.save({
          description: description,
          imgSrc: imgSrc,
          location: location,
          postOwner: postOwner,
        })
      ).postId;
    } catch (e) {
      throw new Error('add was failed');
    }
  }

  async getPosts(): Promise<Post[]> {
    return await this.postRepository.find({
      relations: {
        postOwner: true,
      },
    });
  }

  async getUserPosts(userName: string) {
    return await this.postRepository.find({
      relations: {
        postOwner: true,
      },
      where: {
        postOwner: {
          userName: userName,
        },
      },
    });
  }
}
