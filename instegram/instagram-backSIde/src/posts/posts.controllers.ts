import {
  Controller,
  Post,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { User } from '../models/user.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  getAllPosts() {
    return this.postsService.getPosts();
  }

  @Get('user/:username')
  getUserPosts(@Param('username') username: string) {
    const posts = this.postsService.getUserPosts(username);
    console.log(posts);
    return posts;
  }

  @Post()
  addPost(
    @Body('postOwner') postOwner: User,
    @Body('imgSrc') imgSrc: string,
    @Body('location') location?: string,
    @Body('description') description?: string,
  ) {
    return this.postsService.addPost(postOwner, imgSrc, location, description);
  }
}
