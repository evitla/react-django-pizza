import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  filter,
  groupBy,
  join,
  length,
  map,
  mergeWithKey,
  pipe,
  prop,
  propEq,
  props,
  reduce,
  sum,
  values,
} from 'ramda';
import { createSelector } from 'reselect';

import IPizzaProps from '../types/PizzaProps';

export interface PizzaState {
  selected: SelectedPizza[];
  pizzas: IPizzaProps[];
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    selected: [],
    pizzas: [],
  },
  reducers: {
    onPizzaSelect: (state: PizzaState, action: PayloadAction<SelectedPizza>) => {
      state.selected.push({ ...action.payload, count: 1 });
    },
    onSave: (state: PizzaState, action: PayloadAction<IPizzaProps[]>) => {
      state.pizzas = action.payload;
    },
  },
});

export const { onPizzaSelect, onSave } = pizzaSlice.actions;
export default pizzaSlice.reducer;

// let result = Object.values(
//   state.pizza.selected.reduce((a: any, c: any) => {
//     let key = `${c.id}~~${c.type}~~${c.size}`;
//     if (a[key]) a[key].count += c.count;
//     else a[key] = Object.assign({}, c);
//     return a;
//   }, {}),
// );
const mergeCount = mergeWithKey((key, left, right) => (key === 'count' ? left + right : left));
const groupKey = pipe((props as any)(['id', 'type', 'size']), join('~~'));
const make = pipe((groupBy as any)(groupKey), map(reduce(mergeCount, {})), values);

export const selectedPizzasSelector = (state: any) => (make as any)(state.pizza.selected);

export const priceSelector = createSelector(
  (state: any) => state.pizza.selected,
  pipe(map(prop('price')), sum),
);

export const pizzaCountSelector = createSelector((state: any) => state.pizza.selected, length);

export const countClickSelector = (id: number) =>
  createSelector(
    (state: any) => state.pizza.selected,
    pipe(filter(propEq('id', id)), length as any),
  );

export const filteredPizzasSelector = createSelector(
  (state: any) => state.pizza.pizzas,
  (state: any) => state.categories.selected,
  (pizzas: any, selectedCategory: any) => {
    // 'all' category denoted as ''
    if (typeof selectedCategory.index === 'string') return pizzas;
    return filter(propEq('category', selectedCategory.index))(pizzas);
  },
);

type SelectedPizza = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: number;
  size: number;
  count?: number;
};
