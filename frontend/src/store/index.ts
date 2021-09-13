import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import sortingSlice from './sortingSlice';
import pizzaSlice from './pizzaSlice';

export const store = configureStore({
  reducer: { categories: categoriesSlice, sort: sortingSlice, pizza: pizzaSlice },
  middleware: [logger],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
