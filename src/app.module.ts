import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './User/user.controller';
import { UserModule } from './User/user.module';
ConfigModule.forRoot();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    UserModule,
  ],
  // controllers: [AppController, UserController],
  // providers: [AppService],
})
export class AppModule {}
