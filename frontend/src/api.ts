import axios from 'axios';
import { URL, PROPS } from './constants';
import IPizzaProps from './types/PizzaProps';

export const getPizzas = (sortType: number): Promise<IPizzaProps[]> => {
  return axios.get(URL + PROPS[sortType]);
};
