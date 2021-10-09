import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { CATEGORIES } from '../constants';
import { RootState } from '.';

export type CategoryType = '' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    selected: {
      index: 0,
      item: '',
    },
    options: CATEGORIES,
  },
  reducers: {
    onSelect: (state, action: PayloadAction<{ index: number; item: CategoryType | string }>) => {
      state.selected.index = action.payload.index;
      state.selected.item = action.payload.item;
    },
  },
});

export const { onSelect } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const optionsSelector = createSelector(
  (state: RootState) => state.categories.options,
  (options) => options,
);

export const activeItemSelector = createSelector(
  (state: RootState) => state.categories.selected,
  (activeItem) => activeItem,
);
