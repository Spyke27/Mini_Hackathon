import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Grupo } from "../../GrupoPi/entities/grupo.entities"; 

@Entity({name: 'tb_projetos'})
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    nomeProjeto: string

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    logoProjeto: string

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    linkProjeto: string

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    pitProjeto: string


    @ManyToOne(() => Grupo, (grupo) => grupo.projeto, {
        onDelete: "CASCADE"
    })
    grupo: Grupo[]

}