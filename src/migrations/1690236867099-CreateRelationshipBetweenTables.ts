import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationshipBetweenTables1690236867099 implements MigrationInterface {
    name = 'CreateRelationshipBetweenTables1690236867099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(9), "created_at" date NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
