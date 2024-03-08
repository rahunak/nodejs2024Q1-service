import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './User/user.controller';
import { UserModule } from './User/user.module';
import { TrackModule } from './Track/track.module';
import { ArtistModule } from './Artist/artist.module';
import { AlbumModule } from './Album/album.module';
import { FavoriteModule } from './Favorite/favorite.module';

ConfigModule.forRoot();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    UserModule,
    TrackModule,
    ArtistModule,
    AlbumModule,
    FavoriteModule,
  ],
})
export class AppModule {}
