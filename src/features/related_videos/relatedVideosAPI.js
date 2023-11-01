import axios from '../../utilities/axios/axios';
// ?tags_like=router&tags_like=react&id_ne=2&_limit=5
export default async function fetchRelatedVideos({ tags, currentVideoID }) {
   const queryString =
      tags?.length > 0
         ? tags.map((tag) => `tags_like=${tag}`).join('&') +
           `&id_ne=${currentVideoID}&_limit=5`
         : `id_ne=${currentVideoID}&_limit=5`;

   const response = await axios.get(`/videos?${queryString}`);
   return await response.data;
}
