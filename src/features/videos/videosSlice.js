import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllVideos from './videosAPI';

const initialState = {
   videos: [],
   isLoading: false,
   isError: false,
   error: '',
};

export const fetchVideosAsync = createAsyncThunk(
   'videos/fetchAllVideos',
   async (neccessaryData) => await fetchAllVideos(neccessaryData)
);

const videosSlice = createSlice({
   name: 'videos',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchVideosAsync.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
         })
         .addCase(fetchVideosAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.videos = payload;
         })
         .addCase(fetchVideosAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         });
   },
});

export default videosSlice.reducer;
