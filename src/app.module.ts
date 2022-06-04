import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import the module for the database
import { TypeOrmModule } from '@nestjs/typeorm';

// Import custom modules
import { ProductsModule } from './products/products.module';

@Module({
    imports: [ProductsModule, TypeOrmModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
