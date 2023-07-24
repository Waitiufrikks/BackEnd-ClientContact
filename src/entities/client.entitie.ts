import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entitie";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  full_name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;
  
  @Column({ type: "varchar", length: 9, nullable: true })
  phone: number | null;

  @CreateDateColumn({ type: "date" })
  created_at?: string;

  @OneToMany(() => Contact,(contact) => contact.client)
  contact: Contact[];
}