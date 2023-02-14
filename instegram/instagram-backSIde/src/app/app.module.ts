import { Module } from '@nestjs/common';
import { AppDataSource } from '../data-source';
import { LikesModule } from '../Likes/likes.module';
import { PostsModule } from '../Posts/posts.module';
import { UsersModule } from '../Users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppDataSource,
    PostsModule,
    UsersModule,
    LikesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
