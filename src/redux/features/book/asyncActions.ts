import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TBookSlice, TBookItem } from './types';
import { TSearchSlice } from '../search/types';

export const fetchBooks = createAsyncThunk<TBookSlice, TSearchSlice>(
  'books/fetchBooks',
  async (params, { rejectWithValue, fulfillWithValue }) => {
    const { q, orderBy, startIndex, maxResults } = params;
    try {
      const { data } = await axios.get<TBookItem[]>(
        `${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}?q=${q}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
