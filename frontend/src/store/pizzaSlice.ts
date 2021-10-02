import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  and,
  filter,
  findIndex,
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
import { RootState } from '.';

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
      const { id, type, size } = action.payload;
      const foundIndex = state.selected.findIndex(
        (p: SelectedPizza) => p.id === id && p.type === type && p.size === size,
      );
      if (foundIndex === -1) state.selected.push({ ...action.payload, count: 1 });
      else {
        state.selected[foundIndex].count += 1;
      }
    },
    onSave: (state: PizzaState, action: PayloadAction<IPizzaProps[]>) => {
      state.pizzas = action.payload;
    },
    onClearCard: (state: PizzaState) => {
      state.selected = [];
    },
    onDecrement: (
      state: PizzaState,
      { payload: { id, types, sizes } }: PayloadAction<Pick<IPizzaProps, 'id' | 'types' | 'sizes'>>,
    ) => {
      const foundIndex = state.selected.findIndex(
        (p: any) => p.id === id && p.type === types && p.size === sizes,
      );
      state.selected[foundIndex].count -= 1;
    },
    onIncrement: (
      state: PizzaState,
      { payload: { id, types, sizes } }: PayloadAction<Pick<IPizzaProps, 'id' | 'types' | 'sizes'>>,
    ) => {
      const foundIndex = state.selected.findIndex(
        (p: any) => p.id === id && p.type === types && p.size === sizes,
      );
      state.selected[foundIndex].count += 1;
    },
    onDelete: (
      state: PizzaState,
      { payload: { id, types, sizes } }: PayloadAction<Pick<IPizzaProps, 'id' | 'types' | 'sizes'>>,
    ) => {
      const foundIndex = state.selected.findIndex(
        (p: any) => p.id === id && p.type === types && p.size === sizes,
      );
      state.selected.splice(foundIndex, 1);
    },
  },
});

export const { onPizzaSelect, onSave, onClearCard, onDecrement, onIncrement, onDelete } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;

export const selectedPizzasSelector = (state: any) => state.pizza.selected;

export const priceSelector = createSelector(
  selectedPizzasSelector,
  pipe(reduce((a, p: any) => a + p.price * p.count, 0)),
);

export const pizzaCountSelector = createSelector(
  selectedPizzasSelector,
  pipe(map(prop('count')) as any, sum),
);

export const countClickSelector = (id: number) =>
  createSelector(
    (state: RootState) => state.pizza.selected,
    pipe(filter(propEq('id', id)), map(prop('count')) as any, sum),
  );

export const filteredPizzasSelector = createSelector(
  (state: any) => state.pizza.pizzas,
  (state: any) => state.categories.selected,
  (pizzas: any, selectedCategory: any) => {
    // 'all' category denoted as ''
    if (selectedCategory.index === 0) return pizzas;
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
  count: number;
};
