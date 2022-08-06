import { MenuItem } from 'src/menu/entities/menuItem.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './oreder.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  orderId: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  count: number;

  @ManyToOne(() => MenuItem)
  menuItem: MenuItem;

  @ManyToOne(() => Order)
  order: Order;
}
