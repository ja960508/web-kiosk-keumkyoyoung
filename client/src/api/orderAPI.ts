import axios from 'axios';
import { Order } from '../types/server/order';

export const sendOrder = (order: Order): Promise<Order> => {
  return axios.post('/order', order);
};
