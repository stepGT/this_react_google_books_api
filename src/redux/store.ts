import { configureStore } from '@reduxjs/toolkit';
import books from './features/book/slice';
import search from './features/searchSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { books, search },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
