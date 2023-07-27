import { MigrationInterface, QueryRunner } from "typeorm";

export class AddKeyPassword1690473637569 implements MigrationInterface {
    name = 'AddKeyPassword1690473637569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    }

}
