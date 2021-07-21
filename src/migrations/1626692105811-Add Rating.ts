import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRating1626692105811 implements MigrationInterface {
    name = 'AddRating1626692105811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "friend" ADD "rating" integer DEFAULT 5`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "friend" DROP COLUMN "rating"`);
    }

}
