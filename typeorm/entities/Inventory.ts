import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'inventory' })
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item: string;

  @Column()
  quantity: number;
}
