import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntitiesTables1690236603085 implements MigrationInterface {
    name = 'CreateEntitiesTables1690236603085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "full_name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(9), "created_at" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
