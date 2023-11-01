import { configureStore } from '@reduxjs/toolkit';
import videosSlice from '../features/videos/videosSlice';
import tagsSlice from '../features/tags/tagsSlice';
import playerSlice from '../features/player/playerSlice';
import relatedVideosSlice from '../features/related_videos/relatedVideosSlice';
import filterSlice from '../features/filter/filterSlice';

const store = configureStore({
   reducer: {
      videos: videosSlice,
      tags: tagsSlice,
      player: playerSlice,
      relatedVideos: relatedVideosSlice,
      filter: filterSlice,
   },
});

export default store;
