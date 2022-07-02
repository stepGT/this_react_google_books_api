import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const { query } = params;
  const { data } = await axios.get(
    `${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}?q=${query}&startIndex=0&maxResults=5&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
  );
  return data;
});

const initialState = {
  objects: {},
  status: 'pending', // pending | fulfilled | rejected
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'pending';
      state.objects = {};
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Add books to the state array
      state.objects = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = 'rejected';
      state.objects = {};
    });
  },
});

export const selectorBooks = (state) => state.books;

// Action creators are generated for each case reducer function
export const {} = booksSlice.actions;

export default booksSlice.reducer;
