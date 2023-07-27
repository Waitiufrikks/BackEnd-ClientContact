import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  full_name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;
  
  @Column({ type: "integer", nullable: true })
  phone: number | null | undefined;

  @CreateDateColumn({ type: "date" })
  created_at?: string;

  @OneToMany(() => Contact,(contact) => contact.client)
  contacts: Contact[];
}