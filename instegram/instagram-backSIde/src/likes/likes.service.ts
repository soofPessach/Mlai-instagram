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

  private async getLikeId(postId: number, userName: string) {
    return (
      await this.likeRepository.findOneBy({
        post: {
          postId: postId,
        },
        user: {
          userName: userName,
        },
      })
    )?.likeId;
  }

  getPostLikesAmount(postId: number) {
    return this.likeRepository.countBy({
      post: {
        postId: postId,
      },
    });
  }

  async isPostLikedByUser(postId: number, userName: string) {
    try {
      await this.getLikeId(postId, userName);
      return true;
    } catch (e) {
      return false;
    }
  }

  async addLike(postId: number, userName: string) {
    if (!(await this.isPostLikedByUser(postId, userName))) {
      return await this.likeRepository.save({
        post: {
          postId: postId,
        },
        user: {
          userName: userName,
        },
      });
    } else {
      throw new Error(`user ${userName} already liked post ${postId}`);
    }
  }

  async removeLike(postId: number, userName: string) {
    const likeId = await this.getLikeId(postId, userName);

    await this.likeRepository.delete({
      likeId: likeId,
    });
  }
}
