import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Grupo } from "./grupo.entities";

@Module({
    imports: [TypeOrmModule.forFeature([Grupo])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class GrupoModule{}