import { IsNotEmpty } from "class-validator"
import { groupCollapsed } from "console";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Grupo } from "../../GrupoPi/entities/grupo.entities";


@Entity ({name:"tb_turma"})
export class Turma{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100})
    descricao:string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string

    @OneToMany(()=> Grupo, (grupo)=> grupo.turma, {onDelete: "CASCADE"}) 
    grupo: Grupo[]
}
