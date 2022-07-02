import { configureStore } from '@reduxjs/toolkit';
import books from '@redux/features/booksSlice';
import search from '@redux/features/searchSlice';

export const store = configureStore({
  reducer: { books, search },
});
