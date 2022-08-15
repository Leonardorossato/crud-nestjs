import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { myDataSource } from './config/data.source';

async function bootstrap() {
  	const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
	const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
	SwaggerModule.setup('api', app, document);
  myDataSource.initialize();
	await app.listen(7000);
}
bootstrap();
