import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwaggerModule } from './Swagger/SwaggerModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await setupSwaggerModule(app);

  await app.listen(process.env.PORT, () => {
    console.log('App running - listening on port ' + process.env.PORT);
  });
}
bootstrap();
