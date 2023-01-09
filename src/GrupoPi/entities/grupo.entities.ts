import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "hackathon"})
export class GrupoPi{
    
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column()
    numeroGrupo: number

    @IsNotEmpty()
    @Column()
    maisInfos: string

    

}