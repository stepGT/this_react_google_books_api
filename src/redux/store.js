import { configureStore } from '@reduxjs/toolkit';
import books from '@redux/features/booksSlice';

export const store = configureStore({
  reducer: { books },
});
