import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSearchSlice } from './types';

const initialState: TSearchSlice = {
  q: 'all',
  orderBy: 'relevance',
  startIndex: 0,
  maxResults: 30,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQ(state: TSearchSlice, action: PayloadAction<string>) {
      state.q = action.payload;
    },
    setOrderBy(state: TSearchSlice, action: PayloadAction<string>) {
      state.orderBy = action.payload;
    },
    setStartIndex(state: TSearchSlice, action: PayloadAction<number>) {
      state.startIndex = ++action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQ, setOrderBy, setStartIndex } = searchSlice.actions;

export default searchSlice.reducer;
