import axios from '../../utilities/axios/axios';

export default async function fetchAllTags() {
   const response = await axios.get('/tags');
   return await response.data;
}
