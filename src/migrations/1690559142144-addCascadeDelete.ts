import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCascadeDelete1690559142144 implements MigrationInterface {
    name = 'AddCascadeDelete1690559142144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_72d1013c43a0198e905290831e5"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_72d1013c43a0198e905290831e5" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_72d1013c43a0198e905290831e5"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_72d1013c43a0198e905290831e5" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
