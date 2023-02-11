import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get('post/:postId')
  getPostLikesAmount(@Param('postId') postId: number) {
    return this.likesService.getLikesQuantity(postId);
  }

  @Get('post/:postId/user/:username')
  isUserLikedPost(
    @Param('postId') postId: number,
    @Param('username') username: string,
  ) {
    return this.likesService.isPostLikedByUser(postId, username);
  }

  @Post()
  addLike(@Body('username') userName: string, @Body('postId') postId: number) {
    return this.likesService.addLike(postId, userName);
  }

  @Delete()
  removeLike(
    @Body('username') userName: string,
    @Body('postId') postId: number,
  ) {
    return this.likesService.removeLike(postId, userName);
  }
}
