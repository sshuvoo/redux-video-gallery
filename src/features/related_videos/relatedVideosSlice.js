import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRelatedVideos from './relatedVideosAPI';

const initialState = {
   relatedVideos: [],
   isLoading: false,
   isError: false,
   error: '',
};

export const fetchRelatedVideosAsync = createAsyncThunk(
   'relatedVideos/fetch',
   async (neccessaryData) => await fetchRelatedVideos(neccessaryData)
);

const relatedVideosSlice = createSlice({
   name: 'relatedVideos',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchRelatedVideosAsync.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
         })
         .addCase(fetchRelatedVideosAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.relatedVideos = payload;
         })
         .addCase(fetchRelatedVideosAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         });
   },
});

export default relatedVideosSlice.reducer;
