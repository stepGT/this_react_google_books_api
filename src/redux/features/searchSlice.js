import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  q: 'all',
  orderBy: 'relevance',
  startIndex: 0,
  maxResults: 30,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQ(state, action) {
      state.q = action.payload;
    },
    setOrderBy(state, action) {
      state.orderBy = action.payload;
    },
    setParams(state, action) {
      state.startIndex = action.payload.startIndex + 1;
    },
  },
});

export const selectorSearch = (state) => state.search;

// Action creators are generated for each case reducer function
export const { setQ, setOrderBy, setParams } = searchSlice.actions;

export default searchSlice.reducer;
