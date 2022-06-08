import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import the module for the database
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SpellModule } from './spell/spell.module';

// Import custom modules
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, ProductsModule, TypeOrmModule.forRoot(), UserModule, SpellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
