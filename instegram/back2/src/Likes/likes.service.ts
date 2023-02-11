import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Like } from '../Models/LikeModel';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
  ) {}

  getLikesQuantity(postId: number) {
    return this.likeRepository.countBy({
      post: {
        postId: postId,
      },
    });
  }

  async getLikeId(postId: number, userName: string) {
    try {
      const like: Like = await this.likeRepository.findOneBy({
        post: {
          postId: postId,
        },
        user: {
          userName: userName,
        },
      });

      return like.likeId;
    } catch (e) {
      return null;
    }
  }

  async isPostLikedByUser(postId: number, userName: string) {
    return (await this.getLikeId(postId, userName)) !== null;
  }

  async addLike(postId: number, userName: string) {
    if (!(await this.isPostLikedByUser(postId, userName))) {
      try {
        return await this.likeRepository.save({
          post: {
            postId: postId,
          },
          user: {
            userName: userName,
          },
        });
      } catch (e) {
        throw new Error(e);
      }
    } else {
      throw new Error(`user ${userName} already liked post ${postId}`);
    }
  }

  async removeLike(postId: number, userName: string) {
    try {
      const likeId = await this.getLikeId(postId, userName);

      await this.likeRepository.delete({
        likeId: likeId,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
