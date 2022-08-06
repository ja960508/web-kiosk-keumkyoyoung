import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  paymentMethod: string;

  @Column({ type: 'decimal', nullable: false })
  paidAmount: number;

  @Column({ type: 'decimal', nullable: false })
  totalAmount: number;

  @CreateDateColumn()
  paymentDate: Date;

  @Column({ type: 'int', nullable: false })
  orderNumber: number;
}
