import axios from '../../utilities/axios/axios';

export default async function fetchVideo(id) {
   const response = await axios.get(`/videos/${id}`);
   return await response.data;
}
