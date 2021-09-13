import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export type CategoryType = '' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые';

export interface CategoriesState {
  selected: {
    index: string | number;
    item: CategoryType;
  };
  options: CategoryType[];
}

const initialState: CategoriesState = {
  selected: {
    index: '',
    item: '',
  },
  options: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    onSelect: (
      state: CategoriesState,
      action: PayloadAction<{ index: string | number; item: CategoryType }>,
    ) => {
      state.selected.index = action.payload.index;
      state.selected.item = action.payload.item;
    },
  },
});

export const { onSelect } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const optionsSelector = createSelector(
  (state: { categories: CategoriesState }) => state.categories.options,
  (options) => options,
);

export const activeItemSelector = createSelector(
  (state: { categories: CategoriesState }) => state.categories.selected,
  (activeItem) => activeItem,
);
