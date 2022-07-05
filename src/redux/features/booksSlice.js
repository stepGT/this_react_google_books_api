import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const { query } = params;
  const { data } = await axios.get(
    `${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}?q=${query}&startIndex=0&maxResults=5&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
  );
  return data;
});

export const fetchBookByID = createAsyncThunk('books/fetchBookByID', async (params) => {
  const { id } = params;
  const { data } = await axios.get(`${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}/${id}`);
  return data;
});

const initialState = {
  objects: {},
  status: 'pending', // pending | fulfilled | rejected
  object: {
    item: {},
    status: 'pending',
  },
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

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBookByID.pending, (state) => {
      state.object.status = 'pending';
      state.object = {};
    });
    builder.addCase(fetchBookByID.fulfilled, (state, action) => {
      // Add book to the state array
      state.object.item = action.payload;
      state.object.status = 'fulfilled';
    });
    builder.addCase(fetchBookByID.rejected, (state) => {
      state.object.status = 'rejected';
      state.object = {};
    });
  },
});

export const selectorBooks = (state) => state.books;
export const selectorBookByID = (state) => state.books.object;

// Action creators are generated for each case reducer function
export const {} = booksSlice.actions;

export default booksSlice.reducer;
