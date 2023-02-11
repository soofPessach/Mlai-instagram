import { Module } from '@nestjs/common';
import { AppDataSource } from '../data-source';
import { likesModule } from '../Likes/likes.module';
import { PostsModule } from '../Posts/posts.module';
import { UsersModule } from '../Users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppDataSource,
    PostsModule,
    UsersModule,
    likesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
