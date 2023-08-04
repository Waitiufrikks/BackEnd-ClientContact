import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  full_name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;
  
  @Column({ type: "varchar", nullable: true })
  phone: string | null | undefined;

  @CreateDateColumn({ type: "date" })
  created_at?: string;

  @ManyToOne(() => Client, client => client.contacts,{ onDelete: "CASCADE" })
  @JoinColumn({ name: "client_id" })
  client: Client;
}
