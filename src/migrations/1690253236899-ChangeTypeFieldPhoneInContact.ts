import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeFieldPhoneInContact1690253236899 implements MigrationInterface {
    name = 'ChangeTypeFieldPhoneInContact1690253236899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying(9)`);
    }

}
