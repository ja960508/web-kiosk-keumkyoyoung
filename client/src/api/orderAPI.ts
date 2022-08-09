import axios from 'axios';
import { Order } from '../types/server/order';

export const sendOrder = async (order: Order): Promise<Order> => {
  const response = await axios.post('/order', order);
  return response.data;
};
