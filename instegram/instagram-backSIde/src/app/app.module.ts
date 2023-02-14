import { Module } from '@nestjs/common';
import { AppDataSource } from '../data-source';
import { likesModule } from '../Likes/likes.module';
import { PostsModule } from '../Posts/posts.module';
import { UsersModule } from '../Users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppDataSource,
    PostsModule,
    UsersModule,
    likesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
