import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from './asyncActions';
import { TBookSlice, EStatusBook, TBookItem } from './types';

const initialState: TBookSlice = {
  items: [],
  status: '',
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loadMoreSlice(state: TBookSlice, action: PayloadAction<TBookItem[]>) {
      state.items.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.pending, (state) => {
      state.items = [];
      state.status = EStatusBook.PENDING;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Add books to the state array
      state.items = action.payload.items;
      state.status = EStatusBook.FULFILLED;
      state.error = null;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      //console.log(action.payload);
      state.status = EStatusBook.REJECTED;
      state.items = [];
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { loadMoreSlice } = booksSlice.actions;

export default booksSlice.reducer;
