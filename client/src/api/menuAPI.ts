import axios from 'axios';
import { Menu } from '../types/server/menu';

export const getMenu = (): Promise<Menu[]> => {
  return axios.get('/menu');
};
