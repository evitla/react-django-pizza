import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export type SortType = 'популярности' | 'цене' | 'алфавиту';

export interface SortState {
  selected: number;
  options: SortType[];
}

const initialState: SortState = {
  selected: 0, // first element from options
  options: ['популярности', 'цене', 'алфавиту'],
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    onSort: (state: SortState, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
  },
});

export const { onSort } = sortSlice.actions;
export default sortSlice.reducer;

export const optionsSelector = createSelector(
  (state: { sort: SortState }) => state.sort.options,
  (options) => options,
);

export const activeItemSelector = createSelector(
  (state: { sort: SortState }) => state.sort.selected,
  (activeItem) => activeItem,
);
