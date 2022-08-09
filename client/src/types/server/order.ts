export enum Payment {
  CREDIT = 'credit',
  CASH = 'cash',
}

export type Order = {
  paidAmount: number;
  totalAmount: number;
  paymentMethod: Payment;
  orderItems: {
    menuItemId: number;
    count: number;
  }[];
  orderNumber?: number;
};
