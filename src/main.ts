import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ShutdownSignal } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // shutdown is handled in app.service

  // makes it hang
  //app.enableShutdownHooks();

  // makes it hang
  app.enableShutdownHooks([ShutdownSignal.SIGBUS]);

  await app.listen(3000);
}
bootstrap();
