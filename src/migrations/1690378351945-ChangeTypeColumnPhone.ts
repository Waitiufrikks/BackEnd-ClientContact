import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeColumnPhone1690378351945 implements MigrationInterface {
    name = 'ChangeTypeColumnPhone1690378351945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" character varying(9)`);
    }

}
