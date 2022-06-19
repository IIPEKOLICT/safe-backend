import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './configs/db.config';
import { ConfigModule } from '@nestjs/config';
import { SecretModule } from './features/secret/secret.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(dbConfig), SecretModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
