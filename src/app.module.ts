import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './GrupoPi/entities/grupo.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hackathon',
      entities: [Grupo],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
