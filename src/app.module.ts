import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SpellModule } from './spell/spell.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(), UserModule, SpellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
