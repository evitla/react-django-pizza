import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filter, length, map, pipe, prop, propEq, sum } from 'ramda';
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
      state.selected.push(action.payload);
    },
    onSave: (state: PizzaState, action: PayloadAction<IPizzaProps[]>) => {
      state.pizzas = action.payload;
    },
  },
});

export const { onPizzaSelect, onSave } = pizzaSlice.actions;
export default pizzaSlice.reducer;

const selectedPizzasSelector = (state: any) => state.pizza.selected;

export const priceSelector = createSelector(selectedPizzasSelector, pipe(map(prop('price')), sum));

export const pizzaCountSelector = createSelector(selectedPizzasSelector, length);

export const countClickSelector = (id: number) =>
  createSelector(selectedPizzasSelector, pipe(filter(propEq('id', id)), length as any));

type SelectedPizza = {
  id: number;
  price: number;
  type: number;
  size: number;
};
