import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port: number = 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    console.log(`Application is running on: http://127.0.0.1:${[port]}`);
}
bootstrap();
