import axios from '../../utilities/axios/axios';

export default async function fetchAllVideos({ filterKeys, searchKey }) {
   let queryString = '';
   if (filterKeys?.length > 0) {
      queryString += filterKeys.map((key) => `tags_like=${key}`).join('&');
      if (searchKey) {
         queryString += `&q=${searchKey}`;
      }
   } else {
      if (searchKey) {
         queryString += `q=${searchKey}`;
      }
   }
   const response = await axios.get(`/videos?${queryString}`);
   return await response.data;
}
