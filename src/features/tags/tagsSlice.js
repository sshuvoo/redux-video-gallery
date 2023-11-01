import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllTags from './tagsAPI';

const initialState = {
   tags: [],
   isLoading: false,
   isError: false,
   error: '',
};

export const fetchTagsAsync = createAsyncThunk(
   'tags/fetchAllTags',
   async () => await fetchAllTags()
);

const tagsSlice = createSlice({
   name: 'tags',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchTagsAsync.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
         })
         .addCase(fetchTagsAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.tags = payload;
         })
         .addCase(fetchTagsAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         });
   },
});

export default tagsSlice.reducer;
