import { Module } from '@nestjs/common';
import { TrackService } from './Track.service';
import { TrackController } from './Track.controller';
import { DbModule } from '../DataBase/database.module';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
  imports: [DbModule],
})
export class TrackModule {}
