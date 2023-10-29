import TagItem from './TagItem';

export default function TagsContainer() {
   return (
      <div>
         <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
         </div>
      </div>
   );
}
