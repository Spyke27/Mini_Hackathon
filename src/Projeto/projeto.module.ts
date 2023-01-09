import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Projetos } from './entities/projeto.entities'

@Module({
    imports: [TypeOrmModule.forFeature([Projetos])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class ProjetosModule {}