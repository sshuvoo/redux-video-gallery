import VideoDesc from '../components/video/VideoDesc';
import VideoPlayer from '../components/video/VideoPlayer';
import RelatedVideoContainer from '../components/video/RelatedVideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSingleVideoAsync } from '../features/player/playerSlice';
import { useParams } from 'react-router-dom';

export default function PlayerPage() {
   const { videoID } = useParams();
   const dispatch = useDispatch();
   const { isLoading, isError, video, error } = useSelector(
      ({ player }) => player
   );

   useEffect(() => {
      dispatch(fetchSingleVideoAsync(videoID));
   }, [dispatch, videoID]);

   let content;
   if (isLoading) content = <div className="col-span-12">Loading...</div>;
   if (!isLoading && isError)
      content = <div className="col-span-12">{error}</div>;
   if (!isLoading && !isError && !video.id)
      content = <div className="col-span-12">No videos Found</div>;
   if (!isLoading && !isError && video.id) {
      content = (
         <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
               <VideoPlayer link={video.link} title={video.title} />
               <VideoDesc video={video} />
            </div>
            <RelatedVideoContainer playerID={video.id} tags={video.tags} />
         </div>
      );
   }

   return (
      <section className="pt-6 pb-20">
         <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            {content}
         </div>
      </section>
   );
}
