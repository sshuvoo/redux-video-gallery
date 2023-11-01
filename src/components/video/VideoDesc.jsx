/* eslint-disable react/prop-types */
import unlikeIcon from './../../assets/unlike.svg';
import likeIcon from './../../assets/like.svg';

export default function VideoDesc({ video }) {
   return (
      <div>
         <h1 className="text-lg font-semibold tracking-tight text-slate-800">
            {video.title}
         </h1>
         <div className="pb-4 flex items-center space-between border-b">
            <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
               Uploaded on {video.date}
            </h2>

            {/*<!-- like/unlike -->*/}
            <div className="flex gap-10 w-48">
               <div className="flex gap-1">
                  <div className="shrink-0">
                     <img className="w-5 block" src={likeIcon} alt="Like" />
                  </div>
                  <div className="text-sm leading-[1.7142857] text-slate-600">
                     {video.likes}
                  </div>
               </div>
               <div className="flex gap-1">
                  <div className="shrink-0">
                     <img className="w-5 block" src={unlikeIcon} alt="Unlike" />
                  </div>
                  <div className="text-sm leading-[1.7142857] text-slate-600">
                     {video.unlikes}
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
            {video.description}
         </div>
      </div>
   );
}
