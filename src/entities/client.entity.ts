import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  full_name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "varchar", nullable: true })
  phone: string | null | undefined;

  @CreateDateColumn({ type: "date" })
  created_at?: string;

  @OneToMany(() => Contact,contact => contact.client)
  contacts: Contact[];
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const wasEncrypted = getRounds(this.password);
    if (!wasEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}