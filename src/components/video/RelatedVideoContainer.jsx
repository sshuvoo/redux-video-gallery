/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import RelatedVideoItem from './RelatedVideoItem';
import { useEffect } from 'react';
import { fetchRelatedVideosAsync } from '../../features/related_videos/relatedVideosSlice';

export default function RelatedVideoContainer({ playerID, tags }) {
   const { relatedVideos } = useSelector((state) => state.relatedVideos);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchRelatedVideosAsync({ currentVideoID: playerID, tags }));
   }, [dispatch, playerID, tags]);

   return (
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
         {relatedVideos?.length > 0 &&
            relatedVideos.map((video) => (
               <RelatedVideoItem key={video.id} video={video} />
            ))}
      </div>
   );
}
