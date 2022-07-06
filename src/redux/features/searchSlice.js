import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  q: 'all',
  orderBy: 'relevance',
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
  },
});

export const selectorSearch = (state) => state.search;

// Action creators are generated for each case reducer function
export const { setQ, setOrderBy } = searchSlice.actions;

export default searchSlice.reducer;
