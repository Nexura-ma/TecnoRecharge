import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);



  app.enableCors({

    origin: true,

    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',

    credentials: true,

  });



  const httpAdapter = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));



  app.useGlobalPipes(new ValidationPipe({

    whitelist: true,

    forbidNonWhitelisted: true,

    transform: true,

  }));

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');

}

bootstrap();
