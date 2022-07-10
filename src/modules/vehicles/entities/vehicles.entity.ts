import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('vehicles')
export class Vehicles {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  plate: string;

  @Column({ nullable: true, default: false })
  isFavorite?: boolean;

  @Column()
  year: Date;

  @Column()
  color: string;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
