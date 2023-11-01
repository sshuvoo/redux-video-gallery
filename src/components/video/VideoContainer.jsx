import { useDispatch, useSelector } from 'react-redux';
import VideoItem from './VideoItem';
import { useEffect } from 'react';
import { fetchVideosAsync } from '../../features/videos/videosSlice';

export default function VideoContainer() {
   const dispatch = useDispatch();
   const { isLoading, isError, videos, error } = useSelector(
      (state) => state.videos
   );
   const { filterKeys, searchKey } = useSelector((state) => state.filter);

   useEffect(() => {
      dispatch(fetchVideosAsync({ filterKeys, searchKey }));
   }, [dispatch, filterKeys, searchKey]);

   let content;
   if (isLoading) content = <div className="col-span-12">Loading...</div>;
   if (!isLoading && isError)
      content = <div className="col-span-12">{error}</div>;
   if (!isLoading && !isError && videos?.length === 0)
      content = <div className="col-span-12">No videos Found</div>;
   if (!isLoading && !isError && videos?.length >= 0)
      content = videos.map((video) => (
         <VideoItem key={video.id} video={video} />
      ));

   return (
      <section className="pt-12">
         <section className="pt-12">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
               {content}
            </div>
         </section>
      </section>
   );
}
