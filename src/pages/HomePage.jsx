import TagsContainer from './../components/tags/TagsContainer';
import VideoContainer from './../components/video/VideoContainer';
import Pagination from './../components/pagination/Pagination';

export default function HomePage() {
   return (
      <>
         <TagsContainer />
         <VideoContainer />
         <Pagination />
      </>
   );
}
