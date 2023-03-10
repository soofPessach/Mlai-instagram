import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from '../models/like.model';
import { LikesController } from './likes.controllers';
import { LikesService } from './likes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Like])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
