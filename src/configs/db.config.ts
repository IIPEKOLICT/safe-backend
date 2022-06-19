import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LOCAL_DATABASE_URL } from '../constants/common';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || LOCAL_DATABASE_URL,
  entities: [],
  synchronize: true,
};
