import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: 'all',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const selectorSearch = (state) => state.search;

// Action creators are generated for each case reducer function
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
