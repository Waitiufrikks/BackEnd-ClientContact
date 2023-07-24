import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameClientIdForClientId1690237433776 implements MigrationInterface {
    name = 'RenameClientIdForClientId1690237433776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "clientId" TO "client_id"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_72d1013c43a0198e905290831e5" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_72d1013c43a0198e905290831e5"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "client_id" TO "clientId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
