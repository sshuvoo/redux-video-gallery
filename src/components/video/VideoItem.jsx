/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function VideoItem({ video }) {
   return (
      <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
         <div className="w-full flex flex-col">
            <div className="relative">
               <Link to={`/watch/${video.id}`}>
                  <img
                     src={video.thumbnail}
                     className="w-full h-auto"
                     alt="Some video title"
                  />
               </Link>

               <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  {video.duration}
               </p>
            </div>

            <div className="flex flex-row mt-2 gap-2">
               <Link to={`/watch/${video.id}`} className="shrink-0">
                  <img
                     src={video.avatar}
                     className="rounded-full h-6 w-6"
                     alt="Learn with Sumit"
                  />
               </Link>

               <div className="flex flex-col">
                  <Link to={`/watch/${video.id}`}>
                     <p className="text-slate-900 text-sm font-semibold">
                        {video.title}
                     </p>
                  </Link>
                  <Link
                     to={`/watch/${video.id}`}
                     className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                  >
                     {video.author}
                  </Link>
                  <p className="text-gray-400 text-xs mt-1">
                     {video.views} views . {video.date}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
