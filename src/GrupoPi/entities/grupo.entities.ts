import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "GrupoPi"})
export class Grupo{
    
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column()
    numeroGrupo: number

    @IsNotEmpty()
    @Column()
    maisInfos: string

    /* @OneToMany(() => Projeto, (projeto) => projeto.grupo, {
        onDelete: "CASCADE"
    })
    postagem: Projeto[]

    @ManyToOne(() => Turma, (turma) => turma.grupo, {
        onDelete: "CASCADE"
    })
    turma: Turma */

}