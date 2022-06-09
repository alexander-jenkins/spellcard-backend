import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import custom modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SpellModule } from './spell/spell.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ProductsModule,
        AuthModule,
        UserModule,
        SpellModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
