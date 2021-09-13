import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import IPizzaProps from '../types/PizzaProps';

export interface PizzaState {
  selected: { id: number; price: number; type: number; size: number }[];
  pizzas: IPizzaProps[];
}

const initialState: PizzaState = {
  selected: [],
  pizzas: [],
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    onPizzaSelect: (
      state: PizzaState,
      action: PayloadAction<{
        id: number;
        price: number;
        type: number;
        size: number;
      }>,
    ) => {
      state.selected.push(action.payload);
    },
    onSave: (state: PizzaState, action: PayloadAction<IPizzaProps[]>) => {
      state.pizzas = action.payload;
    },
  },
});

export const { onPizzaSelect, onSave } = pizzaSlice.actions;
export default pizzaSlice.reducer;

export const priceSelector = createSelector(
  (state: { pizza: PizzaState }) => state.pizza.selected,
  (selected) => selected.reduce((a, b) => a + b.price, 0),
);

export const pizzaCountSelector = createSelector(
  (state: { pizza: PizzaState }) => state.pizza.selected,
  (selected) => selected.length,
);

export const countClickSelector = (id: number) =>
  createSelector(
    (state: { pizza: PizzaState }) => state.pizza.selected,
    (selected) => selected.filter((pizza) => pizza.id === id).length,
  );
