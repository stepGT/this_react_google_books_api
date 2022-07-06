import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (params, { rejectWithValue, fulfillWithValue }) => {
    const { query } = params;
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}?q=${query}&startIndex=0&maxResults=5&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchBookByID = createAsyncThunk(
  'books/fetchBookByID',
  async (params, { rejectWithValue, fulfillWithValue }) => {
    const { id } = params;
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}/${id}`);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  objects: {
    data: {},
    status: 'pending', // pending | fulfilled | rejected
    error: null,
  },
  object: {
    data: {},
    status: 'pending', // pending | fulfilled | rejected
    error: null,
  },
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.pending, (state) => {
      state.objects.status = 'pending';
      state.objects.data = {};
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Add books to the state array
      state.objects.data = action.payload;
      state.objects.status = 'fulfilled';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.objects.status = 'rejected';
      state.objects.data = {};
      state.objects.error = action.payload;
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBookByID.pending, (state) => {
      state.object.status = 'pending';
      state.object.data = {};
    });
    builder.addCase(fetchBookByID.fulfilled, (state, action) => {
      // Add book to the state array
      state.object.data = action.payload;
      state.object.status = 'fulfilled';
    });
    builder.addCase(fetchBookByID.rejected, (state, action) => {
      state.object.status = 'rejected';
      state.object.data = {};
      state.object.error = action.payload;
    });
  },
});

export const selectorBooks = (state) => state.books.objects;
export const selectorBookByID = (state) => state.books.object;

// Action creators are generated for each case reducer function
export const {} = booksSlice.actions;

export default booksSlice.reducer;
