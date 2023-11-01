import { useDispatch, useSelector } from 'react-redux';
import TagItem from './TagItem';
import { useEffect } from 'react';
import { fetchTagsAsync } from '../../features/tags/tagsSlice';

export default function TagsContainer() {
   const { tags } = useSelector((state) => state.tags);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchTagsAsync());
   }, [dispatch]);

   return (
      tags?.length > 0 && (
         <div>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
               {tags.map((tag) => (
                  <TagItem key={tag.id} title={tag.title} />
               ))}
            </div>
         </div>
      )
   );
}
