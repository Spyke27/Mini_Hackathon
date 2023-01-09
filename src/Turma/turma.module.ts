import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Turma } from "./entities/turma.entities";


@Module({
    imports: [TypeOrmModule.forFeature([Turma])],
    providers:[],
    controllers:[],
    exports: [TypeOrmModule]
})
export class TurmaModule{}