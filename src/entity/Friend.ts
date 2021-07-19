import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Friend {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ nullable: true})
    nickname: string;

    @Column({nullable: true})
    rating : number;
}
