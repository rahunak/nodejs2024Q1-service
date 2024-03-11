import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { DbModule } from '../DataBase/database.module';
import { TrackService } from '../Track/track.service';
import { ArtistService } from '../Artist/artist.service';
import { AlbumService } from '../Album/album.service';
@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService, TrackService, ArtistService, AlbumService],
  imports: [DbModule],
})
export class FavoriteModule {}
