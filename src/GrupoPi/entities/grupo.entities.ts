import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Turma } from "../../Turma/entities/turma.entities";
import { Projeto } from "../../Projeto/entities/projeto.entities";


@Entity({name: "grupo"})
export class Grupo{
    
    @PrimaryGeneratedColumn()
    id_grupo: number

    @IsNotEmpty()
    @Column()
    numeroGrupo: number

    @IsNotEmpty()
    @Column()
    maisInfos: string

    @OneToMany(() => Projeto, (projeto) => projeto.grupo, {
        onDelete: "CASCADE"
    })
    projeto: Projeto[]

    @ManyToOne(() => Turma, (turma) => turma.grupo, {
        onDelete: "CASCADE"
    })
    turma: Turma

}