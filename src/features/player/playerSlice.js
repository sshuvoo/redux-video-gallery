import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchVideo from './playerAPI';

const initialState = {
   video: {},
   isLoading: false,
   isError: false,
   error: '',
};

export const fetchSingleVideoAsync = createAsyncThunk(
   'video/fetchVideo',
   async (id) => await fetchVideo(id)
);

const playerSlice = createSlice({
   name: 'player',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchSingleVideoAsync.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
         })
         .addCase(fetchSingleVideoAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.video = payload;
         })
         .addCase(fetchSingleVideoAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error?.message;
         });
   },
});

export default playerSlice.reducer;
