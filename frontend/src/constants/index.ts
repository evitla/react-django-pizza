import { CategoryType } from '../store/categoriesSlice';

export const URL = 'http://localhost:8000/api/pizzas/?ordering=';
export const PROPS = ['rating', 'price', 'name'];
export const CATEGORIES: CategoryType[] = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
export const pizzaTypes = ['тонкое', 'традиционное'];
export const pizzaSizes: [26, 30, 40] = [26, 30, 40];
