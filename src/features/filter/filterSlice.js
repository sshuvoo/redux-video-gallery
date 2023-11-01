import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   filterKeys: [],
   searchKey: '',
};

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      keySelection: (state, { payload }) => {
         if (state.filterKeys.includes(payload)) {
            state.filterKeys = state.filterKeys.filter(
               (key) => key !== payload
            );
         } else state.filterKeys.push(payload);
      },
      searchkeySelection: (state, { payload }) => {
         state.searchKey = payload;
      },
   },
});

export default filterSlice.reducer;
export const { keySelection, searchkeySelection } = filterSlice.actions;
