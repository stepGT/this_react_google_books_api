import { RootState } from '../../store';

export const selectBooks = (state: RootState) => state.books;

export const selectBookByID = (id: string | undefined) => (state: RootState) =>
  state.books.items.find((item) => item.id === id);
